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

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray = (tareas = []) => {
        this._listado = tareas;
    };

    crearTarea(desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
