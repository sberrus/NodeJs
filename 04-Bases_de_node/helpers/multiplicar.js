const colors = require("colors");
const fs = require("fs");

imprimirTabla = async (base = 1, max = 10, print = false) => {
    //File Config
    try {
        const nameFile = `tabla-${base}.txt`;
        const path = "tablas/";
        let salida = "";
        let salidaPrint = "";

        salida += `=============\nTabla del ${base}\n=============\n`;
        salidaPrint += `=============\nTabla del ${base}\n=============\n`.brightBlue;
        for (let i = 1; i <= max; i++) {
            const res = i * base;
            salidaPrint += `${base}` + " x ".cyan + `${i} = ${res}\n`;
            salida += `${base}` + " x " + `${i} = ${res}\n`;
        }
        try {
            fs.writeFileSync(path + nameFile, salida);
        } catch (err) {
            throw err;
        }
        if (print) {
            return salidaPrint + "\n" + nameFile.brightGreen.italic;
        }
        return nameFile.brightGreen.italic;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    imprimirTabla,
};
