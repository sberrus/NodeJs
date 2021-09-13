//dependencias
const { v4: uuidv4 } = require("uuid"); //Generador de IDS automático.

class Tarea {
    id = "";
    desc = "";
    completadoEn = null;
    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
    }
}

module.exports = Tarea;
