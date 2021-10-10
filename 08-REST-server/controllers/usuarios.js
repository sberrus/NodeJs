//Se importa el response de express para poder trabajar con el editor de texto y que este pueda saber los distintos métodos y propiedades del mismo. [NO ES NECESARIO SI TRABAJAMOS CON TYPESCRIPT].

const { response, request } = require("express");

const getUsers = (req, res = response) => {
    res.status(200).json({ msg: "GET - desde controller" });
};

const postUsers = (req = request, res) => {
    let body = req.body;
    console.log(body);

    res.status(201).json({ msg: "POST - desde controller", body });
};
const putUsers = (req = request, res) => {
    //desc: Para leer los parámetros de sección, tenemos que llamar a la propiedad "req.params" que contiene todos los parámetros que nos envia el cliente para usar en el backend. [LOS PARAMETROS SIEMPRE SE LEEN COMO UN STRING, EN EL CASO DE QUERER USAR NUMBERS HAY QUE PARSEARLOS]

    const id = req.params.id;

    //desc: Los parametros de consulta (query params) se envian directamente desde el cliente y no hay que configurar nada en las rutas. Esto lo podemos capturar dentro de la propiedad "query" de la request. Devuelve un objeto con los pares clave-valor enviados desde el cliente.

    const query = req.query;

    res.json({ msg: "PUT - desde controller", id: "el id es: " + id, query });
};
const patchUsers = (req, res) => {
    res.json({ msg: "PATCH - desde controller" });
};
const deleteUsers = (req, res) => {
    res.json({ msg: "DELETE - desde controller" });
};

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
};
