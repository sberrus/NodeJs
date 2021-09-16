require("colors");

const { menuPrincipal, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    const busquedas = new Busquedas();
    let opt = "";
    do {
        opt = await menuPrincipal();
        switch (opt) {
            case "1":
                const lugar = await leerInput("Introduce Nombre Ciudad:");
                console.log({ lugar });
                //mostrar mensaje

                //bucar lugares

                //seleccionar lugar

                //Clima

                //mostrar resultados

                console.log("\nInformación de la ciudad\n".green.bold);
                console.log("Ciudad:");
                console.log("Lat:");
                console.log("Lng:");
                console.log("Temperatura:");
                console.log("Mínima:");
                console.log("Máxima:");
                break;
            case "2":
                console.log(`Opción ${opt}`);
                break;
        }
        await pausa();
    } while (opt !== "0");
    console.clear();
};
main();
