//Dependencias
const colors = require("colors");
const { imprimirTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

//Limpiando consola
console.clear();

//TODO: Crear un comando que nos permite condicionar si se muestra o no la tabla en la linea de comandos.

imprimirTabla(argv.b, argv.l, argv.p)
    .then((namefile) => console.log(namefile, "creado \n".brightGreen.bold))
    .catch((err) => console.log(err));
