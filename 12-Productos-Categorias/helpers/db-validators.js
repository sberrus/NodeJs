//Validadores para usar en las funciones custom de la libreria express-validator en su cadena de validaciones

const Role = require("../models/role");
const Usuario = require("../models/usuario");
const Categoria = require("../models/categoria");

const esRoleValido = async (role = "") => {
	const existeRole = await Role.findOne({ role });
	if (!existeRole) {
		//express-validator usa los new Error() para manejar los errores dentro de este. No revienta la App.
		throw new Error(`El role ${role} no está registrado en la BBDD`);
	}
};

const existeEmail = async (correo = "") => {
	const existeEmail = await Usuario.findOne({ correo });
	if (existeEmail) {
		throw new Error(
			`El correo ${correo} ya existe. Por favor utilize otro`
		);
	}
};
const existeUsuarioPorId = async (id) => {
	const existeUsuario = await Usuario.findById(id);
	if (!existeUsuario) {
		throw new Error(
			`El ID: ${id}, no existe en la BBDD. Introduzca uno correcto`
		);
	}
};

/**
 * Comprueba si la categoria existe en la DDBB
 * @param {*} id ID de mongoose de la categoria
 */
const existeCategoria = async (id) => {
	const categoria = await Categoria.findById(id);
	if (!categoria) {
		throw new Error(`La categoria no existe en la BBDD`);
	}
};

module.exports = {
	esRoleValido,
	existeEmail,
	existeUsuarioPorId,
	existeCategoria,
};
