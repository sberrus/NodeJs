//Schemas
const Usuario = require("../models/usuario");
const Role = require("../models/role");

/**
 *
 * @param  {...any} roles Array de strings con los roles permitidos
 * @returns
 */
const isValidRole = (...roles) => {
	return async (req, res, next) => {
		const { uid } = req; //verified uid of request

		const usuario = await Usuario.findById(uid); //db query
		if (!roles.includes(usuario.role)) {
			return res.status(401).json({
				msg: `Solo los usuarios con rol ${roles} pueden realizar esta acción`,
			});
		}
		next();
	};
};

module.exports = { isValidRole };
