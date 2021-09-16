require("colors");
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        //Devuelve un arreglo de todas las "keys" dentro de un objeto. Se envia como argumento el objeto que deseamos que sus propiedades sean convertidas a array.
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key]; // Capturamos la propiedad
            listado.push(tarea);
        });

        return listado;
    }

    get listadoCompleto() {
        let listadoCompleto = "\n";
        this.listadoArr.forEach((tarea, index) => {
            let _index = (index + 1).toString() + ".";
            listadoCompleto += tarea.completadoEn
                ? `${_index.green} ${tarea.desc} :: ${"Completado".brightGreen.bold}\n`
                : `${_index.green} ${tarea.desc} :: ${"Pendiente".brightYellow}\n`;
        });
        return listadoCompleto;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray = (tareas = []) => {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    };

    crearTarea(desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    listarPendientesCompletadas = (completadas = true) => {
        let lista = "\n";
        let index = 0;

        if (this.listadoArr.length > 0) {
            if (completadas) {
                this.listadoArr.forEach((tarea) => {
                    const { completadoEn, desc } = tarea;
                    if (completadoEn) {
                        index += 1;
                        lista += `${(index + ".").green} ${desc} :: ${completadoEn.green}`;
                    }
                });
            } else {
                this.listadoArr.forEach((tarea) => {
                    const { completadoEn, desc } = tarea;
                    if (!completadoEn) {
                        index += 1;
                        lista += `\n${(index + ".").yellow} ${desc} :: ${"Pendiente".yellow}`;
                    }
                });
            }
        } else {
            console.log("No hay elementos para listar");
        }
        return lista;
    };
    borrarTarea(id = "") {
        if (this._listado[id]) {
            delete this._listado[id];
            console.log();
            console.log(`Tarea ${"Eliminada".red.bold} Correctamente`);
        }
    }
}

module.exports = Tareas;
