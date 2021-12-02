const { response } = require("express");
const { Categoria } = require("../models");

/**
 * Crea una nueva categoria
 */
const crearCategoria = async (req, res = response) => {
	const nombre = req.body.nombre.toUpperCase();

	const categoriaDB = await Categoria.findOne({ nombre });
	if (categoriaDB) {
		return res.status(400).json({
			msg: `La categoria ${categoriaDB.nombre}, ya existe`,
		});
	}

	//Generar la data que se va a grabar
	const data = {
		nombre,
		usuario: req.uid,
	};

	const categoria = new Categoria(data);

	//Guardar DB
	await categoria.save();

	res.status(201).json(categoria);
};

module.exports = {
	crearCategoria,
};
