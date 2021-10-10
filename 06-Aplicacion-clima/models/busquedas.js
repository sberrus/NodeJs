const fs = require("fs");

const axios = require("axios");
require("dotenv").config();

class Busquedas {
    historial = [];
    dbPath = "./db/database.json";

    constructor() {
        this.leerDB();
    }

    get historialCapitalizado() {
        let payload = [];

        //"madrid, madrid, spain"
        this.historial.forEach((lugar) => {
            let arrCapitalizado = [];
            //Separamos strings por espacios
            const strSeparado = lugar.split(" ");
            //["madrid,","madrid,","spain"]
            //capitalizamos la primera letra de cada elemento
            strSeparado.forEach((str) => {
                //m a d r i d
                let words = str.split("");
                words[0] = words[0].toUpperCase();
                //M a d r i d
                let capitalizedWord = words.join("");
                //Madrid
                arrCapitalizado.push(capitalizedWord);
            });
            payload.push(arrCapitalizado.join(" "));
        });
        return payload;
    }

    get paramsMapbox() {
        return {
            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            lenguage: "es",
        };
    }
    get paramsWeather() {
        return {
            units: "metric",
            lang: "es",
            appid: process.env.OPENWEATHER_KEY,
        };
    }

    async ciudad(lugar = "") {
        try {
            //Petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });
            const resp = await instance.get();
            const citiesList = resp.data.features.map((city) => ({
                id: city.id,
                nombre: city.place_name,
                lng: city.center[0],
                lat: city.center[1],
            }));
            return citiesList;
        } catch (error) {
            return [];
        }
        //http request
    }

    async climaLugar(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: "https://api.openweathermap.org/data/2.5/weather",
                params: {
                    ...this.paramsWeather,
                    lat,
                    lon,
                },
            });
            const resp = await instance.get();
            return {
                desc: resp.data.weather[0].description,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max,
                temp: resp.data.main.temp,
            };
        } catch (error) {
            return;
        }
    }

    agregarHistorial(lugar = "") {
        //todo: prevenir duplicados
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        }

        this.historial.unshift(lugar.toLocaleLowerCase());

        //todo: grabar en la ddbb
        this.guardarDB();
    }

    guardarDB() {
        let payload = {
            historial: this.historial,
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
    leerDB() {
        if (!fs.existsSync(this.dbPath)) {
            return;
        }
        const info = JSON.parse(fs.readFileSync(this.dbPath, "utf8"));
        info.historial.forEach((lugar) => this.historial.push(lugar));
    }
}

module.exports = Busquedas;
