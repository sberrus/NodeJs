//*Los Callbacks son funciones que se envian como argumento a otra función que lo admita.

//*EJEMPLO DE USO DE CALLBACK.
/* setTimeout(
    //Función callback de Settimeout
    () => {
        console.log("Hola Mundo");
    },
    1500
);
 */

//*FUNCION CON CALLBACK
//En los parámetros de la función indicamos uno de sus argumentos que funcionará como callback.
const getUsuarioByID = (id, callback) => {
    //Creamos un objeto con scope local
    const user = {
        id,
        nombre: "Samuel",
    };
    //Simulación de llamada a BBDD...
    setTimeout(() => {
        //Este es el callback. Aquí como se ve, enviamos como argumento al usuario que es el objeto que hemos creado con anterioridad. Esto nos permite cuando pasemos el callback al momento de llamar a la función, usar el objeto o lo que enviemos como argumento en esta función para que nos sirva como parámetro en la función callback que vamos a utilizar.
        callback(user);
    }, 1500);
};

//*Hacemos uso de la función que tiene un callback
getUsuarioByID(
    10,
    //Callback enviado como argumento.
    (usuario) => {
        //Como podemos ver, la variable que enviamos como argumento es la que contendrá el objeto que hemos definido que irá allí al momento de hacer la función.
        console.log(usuario.id);
        console.log(usuario.nombre.toUpperCase());
    }
);

//!DE ESTA FORMA ES COMO FUNCIONAN POR CONVENCIÓN LA MAYORIA DE LAS LIBRERIAS Y DEPENDENCIAS DE NODE.
