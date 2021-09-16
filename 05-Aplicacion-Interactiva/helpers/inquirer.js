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
                name: `${"1.".green.bold} Crear tarea`,
            },
            { value: "2", name: `${"2.".green.bold} Listar tareas` },
            { value: "3", name: `${"3.".green.bold} Listar tareas completadas` },
            { value: "4", name: `${"4.".green.bold} Listar tareas pendientes` },
            { value: "5", name: `${"5.".green.bold} Completar tarea(s)` },
            { value: "6", name: `${"6.".green.bold} Borrar tarea` },
            { value: "0", name: `${"0.".green.bold} Salir` },
        ],
    },
];
const inquirerMenu = async () => {
    console.clear();

    console.log(consoleHeader("Seleccione una opción:"));

    //Destructuramos y obtenemos lo que nos devuelve la propiedad {opcion} que es la que contendra el valor que nos devuelve el usuario como input. Hay que destacar que la propiedad va a tener el mismo namespace que la propiedad {name:"algo"} del objeto que contiene la configuración del inquirer.
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

const leerInput = async (message) => {
    question = [
        {
            type: "input",
            name: "desc",
            message,
            //validate es un callback que nos permite validar los campos de la pregunta. Recibe como argumento el valor que devuelve el usuario en este caso "value".
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un error".red.bold;
                }
                return true;
            },
        },
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
    console.clear();
    const choices = tareas.map((tarea, index) => {
        const idx = `${index + 1}.`.green.bold;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
        };
    });

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: `Selecciona la tarea a ${"Borrar".red.bold}`,
            choices,
        },
    ];
    const { id } = await inquirer.prompt(preguntas);
    return id;
};
const confirmar = async (message) => {
    console.clear()
    const pregunta = [
        {
            type: "confirm",
            name: "ok",
            message,
        },
    ];
    const { ok } = await inquirer.prompt(pregunta);
    return ok;
};

module.exports = { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar };
