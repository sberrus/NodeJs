const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

//p*:Los modelos se inicializan con mayusculas para dejar más claro que es un objeto al que podemos instanciar.
const Usuario = require("../models/usuario");

const getUsers = (req, res = response) => {
	res.status(200).json({ msg: "GET - desde controller" });
};

const postUsers = async (req = request, res) => {
	let { nombre, correo, password, role } = req.body;

	//h2*: Proceso de creación de Schema y guardado en bbdd MongoDB.

	//h3*: Instancia del Schema para mandar a la bbdd.
	//Enviamos el objeto que nos envia el cliente a la instancia del Schema que se encarga de crear un objeto valido para MongoDB.

	const usuario = new Usuario({ nombre, correo, password, role });

	//todo: Verificar si el correo existe

	//todo: Encriptar contraseña

	//El salt es un valor que se usa para darle más seguridad a un encriptado. Por defecto el valor que recive es 10, mientras mayor sea este número, mayor seguridad tendrá el encriptado, pero esto también hace que la momento de desencriptar la contraseña dure más este proceso.
	const salt = bcryptjs.genSaltSync();

	//Enviamos a la propiedad password del modelo la contraseña hasheada mediante el método .hashSync(string,salt).
	usuario.password = bcryptjs.hashSync(password, salt);

	//h3*: Guardado en BBDD
	//p*: Para guardar los datos en la ddbb se usa el método save() de la instancia el cual nos permite, después de resolver el Schema, mandar los datos a la ddbb.
	//p*: Si el Schema devuelve un error tenemos que atajarlo con un try...catch para poder interactuar con el usuario
	try {
		await usuario.save();
		res.status(201).json({ msg: "POST API", usuario });
	} catch (error) {
		console.log(error);
		res.status(400).json({
			errorMessage: "Faltan datos obligatorios",
			error,
		});
	}
};
const putUsers = (req = request, res) => {
	//Section query
	const id = req.params.id;

	//URL Query
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
