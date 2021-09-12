//Estilizar mensajes en consola
require("colors");
/**
 *
 * @param msg Header del menú de la consola
 * @returns String con el header decorado para consola
 */
const consoleHeader = (msg) => {
    const decorLength = msg.length;
    let decorString = "====";

    for (let i = 0; i < decorLength; i++) {
        decorString += "=";
    }

    return `${decorString}\n  ${msg}  \n${decorString}`;
};

const mostrarMenu = () => {
    //* Devolvemos una promesa para poder usar la respuesta en el main.
    //! Las funciones asincronas, como sabemos también nos sirven para crear promesas, la diferencia es que el return lo hará para el callback del readline pero no va a devolver la promesa.
    //! Para solucionar eso usamos la definición de una nueva promesa para poder usar su función resolve() que si alcanza el scope hasta ese punto de la función.
    return new Promise((resolve) => {
        console.clear();
        console.log(consoleHeader("Seleccione una opción:").brightGreen);

        console.log(`${"1.".green} Crear tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tareas(s)`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir \n`);

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question("Seleccione una opción: ", (opt) => {
            readline.close();
            //desc: En este punto devolvemos la resolución de lo que nos devuelve el cliente mediante la consola para usarlo dentro del ciclo do...while
            resolve(opt);
        });
    });
};

const pausa = () => {
    //*Mismo caso para ejecutar la pausa, devolviendo una promesa que nos permite ejecutarla de manera asincrona en la función main.
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
};
module.exports = { mostrarMenu, pausa };
