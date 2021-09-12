console.clear();
//#region //title: Interacciones cliente-consola (pidiendo inputs de teclado desde la consola)

//desc readline es el paquete de node que nos permite pedir inputs al usuario para nuestras aplicaciones de consola.
const readline = require("readline")
    //desc la Interface es la que nos va a permitir configurar los canales de entrada y salida del proceso.
    .createInterface({
        input: process.stdin, //*Canal de entrada
        output: process.stdout, //*Canal de salida
    });

//*Inicializando readline. En este punto del proceso de ejecución del programa, va a pedirle un input al usuario que va a capturar y podremos utilizar dentro de nuestra aplicación.
readline.question("Seleccione una opción: ", (opt) => {
    console.log({ opt }); //* El argumento del callback va a contener la respuesta que envia el cliente.

    //*Finalizando proceso y continuación en la ejecución del código.
    readline.close();
});
//#endregion
