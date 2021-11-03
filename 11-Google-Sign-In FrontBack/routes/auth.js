const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
	"/",
	[
		check("correo").notEmpty().withMessage("El correo es obligatorio"),
		check("password")
			.notEmpty()
			.withMessage("La contraseña es obligatoria"),
		validarCampos,
	],
	login
);

module.exports = router;
