require("colors");

const { menuPrincipal, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const { consoleHeader } = require("./helpers/decors");
const Busquedas = require("./models/busquedas");

const main = async () => {
    const busquedas = new Busquedas();
    let opt = "";
    do {
        opt = await menuPrincipal();
        switch (opt) {
            case "1":
                const consulta = await leerInput("Introduce Nombre Ciudad:");
                const lugares = await busquedas.ciudad(consulta);
                const id = await listarLugares(lugares);
                const lugarSeleccionado = lugares.find((lugar) => lugar.id === id);

                if (lugarSeleccionado) {
                    //Guardar en db
                    busquedas.agregarHistorial(lugarSeleccionado.nombre);

                    //city data
                    console.clear();
                    console.log("\nInformación de la ciudad\n".green.bold);
                    console.log("Ciudad:" + ` ${lugarSeleccionado.nombre}`.green.bold);
                    console.log("Latitud:" + ` ${lugarSeleccionado.lat}`.green);
                    console.log("Longitud:" + ` ${lugarSeleccionado.lng}`.green);
                    console.log();

                    //request for weather data
                    const climaLugar = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                    //weather data
                    console.log("Clima: " + `${climaLugar.desc}`.green.bold);
                    console.log("Temperatura: " + `${climaLugar.temp}º`.green.bold);
                    console.log("Mínima: " + `${climaLugar.min}º`.green.bold);
                    console.log("Máxima: " + `${climaLugar.max}º`.green.bold);
                }
                break;
            case "2":
                console.clear();
                console.log(consoleHeader("Historial de Busquedas:"));
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = i + 1;
                    console.log(`${idx}.`.green.bold + ` ${lugar}`.bold);
                });
                break;
            case "3":
                console.log(busquedas.historialCapitalizado);
                break;
        }
        await pausa();
    } while (opt !== "0");
    console.clear();
};
main();
