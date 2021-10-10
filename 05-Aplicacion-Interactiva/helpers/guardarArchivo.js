const fs = require("fs");

//ruta y nombre archivo
const archivo = "./db/data.json";

//Almacena un archivo json para almacenar los valores.
const guardarDB = (data) => {
    //Guardando archivo en formato json
    fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
    //Validar la existencia del archivo
    if (!fs.existsSync(archivo)) {
        return null;
    }

    //Leemos el archivo si existe y lo almacenamos en una variable.
    const info = fs.readFileSync(archivo, "utf8");
    const data = JSON.parse(info);
    return data;
};
module.exports = { guardarDB, leerDB };
