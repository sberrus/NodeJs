//*OPTIMIZANDO LA LECTURA DE BANDERAS.
//DESC: yargs es una libreria de node que nos permite trabajar de manera más comoda con las banberas que envia el cliente mediante la consola.
//Dependencia
const argv = require("yargs")
    //TITLE: Opciones de las banderas.
    .option(
        //Abreviatura de la bandera que se piensa configurar.
        "b",
        //Objeto con las configuraciones para las bandera.
        {
            alias: "base", //Bandera completa para configurar.
            type: "number", //Tipo de dato que recibe la bandera.
            desc: "Imprime la tabla del número enviado", //Texto que servirá para mostrar en el comando --help.
            demandOption: true, //Declara si esta bandera es obligatoria o no. (default "false").
        }
    )
    //Permite ejecutar un callback para comprobar que el argumento se haya pasado correctamente. En este caso ejecutaremos un error si intentan enviar cualquier cosa diferente a un number.
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número";
        }
        //Necesario para que se siga ejecutando el código.
        return true;
    }).argv;

//Limpiando consola
console.clear();

//TITLE: EJECUTAR SCRIPT npm run yargs
console.log(process.argv); //Devuelve un array con la estructura original de las banderas.
console.log(argv); //Devuelve un objeto con las banderas mucho más organizadas.
