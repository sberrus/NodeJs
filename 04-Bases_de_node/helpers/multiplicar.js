const fs = require("fs");

imprimirTabla = async (base = 1, max = 10) => {
    //File Config
    try {
        const nameFile = `tabla-${base}.txt`;
        const path = "tablas/";
        let salida = "";

        salida += `=============\nTabla del ${base}\n=============\n`;
        for (let i = 1; i <= max; i++) {
            const res = i * base;
            salida += `${base} x ${i} = ${res}\n`;
        }
        try {
            fs.writeFileSync(path + nameFile, salida);
        } catch (err) {
            throw err;
        }
        return salida + "\n" + nameFile;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    imprimirTabla,
};
