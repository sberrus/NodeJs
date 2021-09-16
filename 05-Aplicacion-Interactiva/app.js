//dependencias
require("colors");

//importaciones
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

//* Creamos una función main() para poder trabajar de manera asincrona en nuestra aplicación.
const main = async () => {
    let opt = "";
    const tareas = new Tareas();

    //Leemos la BBDD y usamos los datos para mantener la concurrencia de los mismos.
    const tareasdb = leerDB();
    if (tareasdb) {
        tareas.cargarTareasFromArray(tareasdb);
    }

    do {
        //Menú principal
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                //Crear Opcion
                const desc = await leerInput("Descripción: ");
                tareas.crearTarea(desc);
                await pausa();
                break;
            case "2":
                //Listado Completo
                console.log(tareas.listadoCompleto);
                await pausa();
                break;
            case "3":
                //Listar tareas completas
                console.log(tareas.listarPendientesCompletadas(true));
                await pausa();
                break;
            case "4":
                //Listar tareas pendientes
                console.log(tareas.listarPendientesCompletadas(false));
                await pausa();
                break;
            case "6":
                //Listar tareas pendientes
                //Se usa el await para prevenir que el menú se solape con el menú principal
                if (tareas.listadoArr.length > 0) {
                    const id = await listadoTareasBorrar(tareas.listadoArr);
                    const ok = await confirmar(`¿Seguro que deseas eliminar la tarea?`.yellow.bold);
                    if (ok) {
                        tareas.borrarTarea(id);
                    }
                } else {
                    console.log("No hay elementos para eliminar");
                }

                await pausa();
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr);
        console.clear();
    } while (opt !== "0");
};

main();
