const { request, response } = require("express");
const { Categoria } = require("../models");

//todo: Crear los controladores de cada una de las acciones que deseamos hacer con las categorias. Cada una de las acciones tiene sus propias reglas

//Obtener categorias - paginado - total - populate* -> Investigar
const obtenerCategorias = async (req = request, res) => {
	const { limit = 5, offset = 0 } = req.query;

	//Consulta
	const [total, categorias] = await Promise.all([
		Categoria.countDocuments(),
		await Categoria.find({ estado: true })
			.limit(parseInt(limit))
			.skip(parseInt(offset)),
	]);

	//respuesta
	res.json({ total, categorias });
};

//Obtener categoria - populate* -> Investigar
const obtenerCategoria = async (req = request, res) => {
	//Param
	const { id } = req.params;

	//categoria
	const categoria = await Categoria.findById(id).populate("usuario");
	//Populate nos permite llenar la propiedad del documento que nos devuelve el modelo. Cuando llamamos a populate("key") enviamos como argumento la llave que tiene referenciado otro documento. En este caso la llave "usuario" tiene referenciado un documento del schema usuarios, pero en el documento de categorias solo aparece el id del documento. Con la función populate llamamos a la información del usuario referenciado y la anexamos a la consulta.
	//respuesta
	res.json(categoria);
};

//Crear categoria
const crearCategoria = async (req, res = response) => {
	//body
	const nombre = req.body.nombre.toUpperCase();

	//Check if the category exists
	const categoriaDB = await Categoria.findOne({ nombre });
	if (categoriaDB) {
		return res.status(400).json({
			msg: `La categoria ${categoriaDB.nombre}, ya existe`,
		});
	}

	//Datos para el modelo
	const data = {
		nombre,
		usuario: req.uid,
	};
	//Instanciando nuevo modelo con los datos.
	const categoria = new Categoria(data);

	//Guardar DB
	await categoria.save();

	//return
	res.status(201).json(categoria);
};

//Actualizar categoria
const actualizarCategoria = async (req, res) => {
	//param
	const { id } = req.params;
	//body
	const { nombre, ...resto } = req.body;

	const categoria = await Categoria.findByIdAndUpdate(id, {
		nombre: nombre.toUpperCase(),
	});

	res.json(categoria);
};

//Borrar categoria (cambiando estado solamente)

module.exports = {
	crearCategoria,
	obtenerCategoria,
	obtenerCategorias,
	actualizarCategoria,
};
