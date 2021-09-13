//dependencias
require("colors");

//importaciones
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

//* Creamos una función main() para poder trabajar de manera asincrona en nuestra aplicación.
const main = async () => {
    let opt = "";
    const tareas = new Tareas();

    const tareasdb = leerDB();
    if (tareasdb) {
        tareas._listado = tareasdb;
    }

    do {
        //Menú principal
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                //Crear Opcion
                const desc = await leerInput("Descripción: ");
                tareas.crearTarea(desc);
                break;
            case "2":
                //Listar Opciones
                console.log(tareas.listadoArr);
                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();
    } while (opt !== "0");
};

main();
