//dependencias
const inquirer = require("inquirer");
require("colors");

//importaciones
const { consoleHeader } = require("./decors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: ["1. Crear Lista", "opt2", "opt3"],
    },
];
const inquirerMenu = async () => {
/*     console.clear();
 */    console.log(consoleHeader("Seleccione una opción:"));

    const opt = await inquirer.prompt(preguntas);
    return opt;
};

module.exports = { inquirerMenu };
