const argv = require("yargs")
    .options({
        b: {
            alias: "base",
            type: "number",
            desc: "Base de la tabla de multiplicar",
            demandOption: true,
        },
        l: {
            alias: "limit",
            type: "number",
            desc: "Limite de la tabla: Hasta que número seguirá multiplicando",
            demandOption: true,
        },
        p: {
            alias: "print",
            type: "boolean",
            desc: "Imprime en consola la tabla",
            demandOption: false,
            default: false,
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "--base/-b solo admite type Number";
        }
        if (isNaN(argv.l)) {
            throw "--limit/-l solo admite type Number";
        }
        return true;
    }).argv;

module.exports = argv;
