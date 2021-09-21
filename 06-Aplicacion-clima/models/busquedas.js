const axios = require("axios");
require("dotenv").config();

class Busquedas {
    historial = [];
    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            lenguage: "es",
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
            console.log(resp.data);
        } catch (error) {
            console.log(error);
            return [];
        }
        //http request

        return []; //retornar lugares coincidentes con la consulta
    }
}

module.exports = Busquedas;
