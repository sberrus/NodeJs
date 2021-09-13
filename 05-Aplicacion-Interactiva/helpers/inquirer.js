//dependencias
const inquirer = require("inquirer"); //desc: Libreria para crear menús interactivos en consola.
require("colors");

//importaciones
const { consoleHeader } = require("./decors");

const preguntas = [
    //desc: Toda la documentación disponible en npm
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            /* "Opción Simple", //Devuelve el string entero */
            {
                //Valor a retornar al seleccionar la opción
                value: "1",
                //Opción que muestra en consola
                name: "1. Crear tarea",
            },
            { value: "2", name: "2. Listar tareas" },
            { value: "3", name: "3. Listar tareas completadas" },
            { value: "4", name: "4. Listar tareas pendientes" },
            { value: "5", name: "5. Completar tarea(s)" },
            { value: "6", name: "6. Borrar tarea" },
            { value: "0", name: "0. Salir" },
        ],
    },
];
const inquirerMenu = async () => {
    console.clear();

    console.log(consoleHeader("Seleccione una opción:"));

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
};
const pausa = async () => {
    console.log("\n");
    await inquirer.prompt([
        {
            type: "input",
            name: "pausa",
            message: `Presiona ${"ENTER".brightGreen} para continuar`,
        },
    ]);
};

module.exports = { inquirerMenu, pausa };
