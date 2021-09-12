//dependencias
require("colors");

//importaciones
const { inquirerMenu } = require("./helpers/inquirer");
/* console.clear();
 */
//* Creamos una función main() para poder trabajar de manera asincrona en nuestra aplicación.
const main = async () => {
    let opt = "";
    do {
        //Esperamos la resolución de la promesa para almacenar lo que nos devuelve en opt y así pdoer usar ese valor como condicional para el ciclo do...while.
        opt = await inquirerMenu();
        console.log({ opt });
    } while (opt !== "0");
};

main();
