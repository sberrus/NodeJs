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

//*EJECUTANDO PROMESAS ANIDADAS DE MANERA LEGIBLE.
const _ID = 1;

let nombre;
getEmpleado(_ID)
    .then((empleado) => {
        nombre = empleado;
        return getSalario(_ID);
    })
    .then((salario) => console.log(`El empleado/a ${nombre} tiene un sueldo de ${salario}`))
    .catch((err) => console.log(err));
