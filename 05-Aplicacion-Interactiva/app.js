//dependencias
require("colors");

//importaciones
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//* Creamos una función main() para poder trabajar de manera asincrona en nuestra aplicación.
const main = async () => {
    let opt = "";
    do {
        //Esperamos la resolución de la promesa para almacenar lo que nos devuelve en opt y así pdoer usar ese valor como condicional para el ciclo do...while.

        opt = await inquirerMenu();

        await pausa();
    } while (opt !== "0");
};

main();
