//Imports
const { response } = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Schemas
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt-generator");
const { googleVerify } = require("../helpers/google-verify");

const login = async (req = request, res = response) => {
	const { correo, password } = req.body;

	try {
		//Vaidaciones
		//existe correo
		const usuario = await Usuario.findOne({ correo });
		if (!usuario) {
			return res
				.status(400)
				.json({ msg: "Error al iniciar sesión - Correo" });
		}
		//usuario activo
		if (usuario.estado === false) {
			return res
				.status(400)
				.json({ msg: "Error al iniciar sesión - Estado" });
		}
		//contraseña
		const validPassword = bcryptjs.compareSync(password, usuario.password);
		if (!validPassword) {
			return res
				.status(400)
				.json({ msg: "Error al iniciar sesión - Password" });
		}
		//generar JWT
		const token = await generarJWT(usuario.id);

		res.json({
			usuario,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: "Error en el servidor",
		});
	}
};

const googleSignIn = async (req, res = response) => {
	const { id_token } = req.body;

	try {
		const { nombre, img, correo } = await googleVerify(id_token);

		res.json({
			msg: "Todo Okey!",
			id_token,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: "Token no se ha verificado correctamente",
		});
	}
};

module.exports = { login, googleSignIn };
