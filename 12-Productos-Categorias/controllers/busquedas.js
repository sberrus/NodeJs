const { request, response } = require("express");

//busca en la bbdd elementos que coincidan en la busqueda pudiendo enviarles mediante query params la coleccion y el termino
const buscar = (req = request, res) => {
	const { coleccion, termino } = req.params;

	res.json({ coleccion, termino });
};

module.exports = { buscar };
