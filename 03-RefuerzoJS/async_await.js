//#region //* DATA
const empleados = [
    { id: 1, nombre: "Samuel" },
    { id: 2, nombre: "Daniela" },
    { id: 3, nombre: "Hellen" },
    { id: 4, nombre: "Oribel" },
];

const salarios = [
    { id: 1, salario: 1500 },
    { id: 2, salario: 2500 },
    { id: 3, salario: 4500 },
];
//#endregion

const getEmpleado = (id) => {
    //Creando una nueva promesa.
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((empleado) => empleado.id === id)?.nombre; //Mantenemos la busqueda del empleado dentro del array.
        empleado
            ? //Resolve es lo que devuelve la promesa al .then() para poder interactuar con su contenido.
              resolve(empleado)
            : //Reject es lo que se recibe en el .catch() en el caso de que haya algun error.
              reject(`No existe empleado con id: "${id}"`);
    });
    //Debemos devolver la promesa para poder usar el return en otras partes del código.
    return promesa;
};

const getSalario = (id) => {
    promesa = new Promise((res, rej) => {
        salario = salarios.find((salario) => salario.id === id)?.salario;
        salario ? res(salario) : rej(`No se encuentra el salario del id: ${id}`);
    });
    return promesa;
};

//*Función Asincrona. Una curiosidad es que al ser una función asincrona, siempre devuelve una promesa.
const pruebaAsync = async () => {
    return "Hola Mundo";
};

//*A pesar de que no estamos definiendo dentro de la función pruebaAsync() la creación de una promesa ni retornandola, al momento de crear la función asincrona, devuelve una promesa.
pruebaAsync().then((res) => console.log(res));

//Ejecutando promesas dentro de una función asyncrona
const getInfoEmpleado = async (id) => {
    //*Await se encarga de ejecutar la promesa y manejar la respuesta de la misma.
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;
    }
};

const _ID = 3;

getInfoEmpleado(_ID)
    .then((res) => {
        console.log("---------------");
        console.log("Todo Bien!");
        console.log(res);
    })
    .catch((err) => {
        console.log("---------------");
        console.log("Algo ha petado");
        console.log(err);
    });
