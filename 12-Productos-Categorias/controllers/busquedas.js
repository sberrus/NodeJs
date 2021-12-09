const { request, response } = require("express");
const { isValidObjectId } = require("mongoose");
const { Usuario } = require("../models");

//Listas de colecciones permitidas para las busquedas
const coleccionesPermitidas = ["categoria", "usuarios", "productos", "roles"];

/**
 * Buscar usuarios por nombre o por MongoID
 * @param {*} termino nombre de usuario || MongoID
 */
const buscarUsuarios = async (termino = "", res = response) => {
	const esMongoID = isValidObjectId(termino);

	if (esMongoID) {
		const usuario = await Usuario.findById(termino);
		res.json({
			results: usuario ? [usuario] : [],
		});
	}
};

//busca en la bbdd elementos que coincidan en la busqueda pudiendo enviarles mediante query params la coleccion y el termino
const buscar = (req = request, res) => {
	const { coleccion, termino } = req.params;

	//Permitir busquedas solo en las colecciones permitidas
	if (!coleccionesPermitidas.includes(coleccion)) {
		return res.status(400).json({
			msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
		});
	}

	switch (coleccion) {
		case "categoria":
			break;
		case "usuarios":
			return buscarUsuarios(termino, res);
		case "productos":
			break;
		default:
			res.status(500).json({ msg: "Busqueda no permitida actualmente" });
	}

	res.json({ coleccion, termino });
};

module.exports = { buscar };
