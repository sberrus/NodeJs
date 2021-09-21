const axios = require("axios");

class Busquedas {
    historial = [];
    constructor() {
        //TODO: leer DB si existe
    }
    async ciudad(lugar = "") {
        try {
            const resp = await axios.get(
                "https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1Ijoic2JlcnJ1cyIsImEiOiJja3R1Ymc4eDQwZ3c3Mm9xdGtiMzVsajNkIn0.whfvjveZK2N0MVYeEBMWFw"
            );
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
