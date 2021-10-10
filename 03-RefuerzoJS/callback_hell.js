//LOS CALLBACK HELLS SON, DE MANERA SENCILLA, CUANDO TENEMOS MULTIPLES CALLBACKS ANIDADOS UNOS DENTRO DE OTROS LOS CUALES VUELVEN UN CÓDIGO ILEGIBLE.

//#region DDBB DATA SIMULATION
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

//!CALLBACK HELL
const getEmpleado = (id, callback) => {
    //Almacenamos la respuesta de la función .find() dentro de una variable
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
    //Si existe el empleado envias envia el callback y definimos err como null para que no dispare el err al enviar el callback.
    if (empleado) {
        callback(null, empleado);
        return "";
    } else {
        //si no encuentra usuario envia mensaje de error.
        return `Empleado con ID: "${id}" no existe`;
    }
};

const getSalario = (id, callback) => {
    salario = salarios.find((salario) => salario.id === id)?.salario;
    if (salario) {
        callback(null, salario);
        return "";
    } else {
        return `Salario con ID: "${id}" no existe`;
    }
};

const ID = 14;

//Obtenemos empleado
console.log(
    getEmpleado(ID, (err, empleado) => {
        if (err) {
            return console.log(err);
        }
        console.log(
            getSalario(ID, (err, salario) => {
                if (err) {
                    return console.log(err);
                }
                console.log("El empleado", empleado, "Tiene un salario de:", salario);
            })
        );
    })
);
