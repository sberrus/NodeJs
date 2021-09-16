//dependencias
const inquirer = require("inquirer"); //desc: Libreria para crear menús interactivos en consola.
require("colors");

//importaciones
const { consoleHeader } = require("./decors");

const menuPrincipal = async () => {
    const preguntas = [
        //desc: Toda la documentación disponible en npm
        {
            type: "list",
            name: "opcion",
            message: "Escoja Una Opción:\n",
            choices: [
                { value: "1", name: `${"1.".green.bold} Buscar ciudades` },
                { value: "2", name: `${"2.".green.bold} Historal de busqueda` },
                { value: "0", name: `${"0.".red.bold} Salir` },
            ],
        },
    ];
    console.clear();

    console.log(consoleHeader("Seleccione una opción:"));

    //Destructuramos y obtenemos lo que nos devuelve la propiedad {opcion} que es la que contendra el valor que nos devuelve el usuario como input. Hay que destacar que la propiedad va a tener el mismo namespace que la propiedad {name:"algo"} del objeto que contiene la configuración del inquirer.
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
};

const leerInput = async (message) => {
    question = [
        {
            type: "input",
            name: "ciudad",

            //validate es un callback que nos permite validar los campos de la pregunta. Recibe como argumento el valor que devuelve el usuario en este caso "value".
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un error".red.bold;
                }
                return true;
            },
        },
    ];
    console.clear();
    console.log(consoleHeader(message));

    const { ciudad } = await inquirer.prompt(question);
    return ciudad;
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
const mostrarListadoCheckList = async (tareas = []) => {
    console.clear();
    const choices = tareas.map((tarea, index) => {
        const idx = `${index + 1}.`.green.bold;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false,
        };
    });

    const pregunta = [
        {
            type: "checkbox",
            name: "ids",
            message: `Seleccione las tareas a ${"completar".green.bold}`,
            choices,
        },
    ];
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
};
const confirmar = async (message) => {
    console.clear();
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
module.exports = { menuPrincipal, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList };
