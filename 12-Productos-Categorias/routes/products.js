//imports
const { Router } = require("express");
const { check } = require("express-validator");

//Controllers
const {
	crearProductos,
	verTodosLosProductos,
} = require("../controllers/product");

//Helpers
const { existeNombre } = require("../helpers/db-validators");

//Middlewares
const { validarCampos, validarJWT, esAdmin } = require("../middlewares");

//Route
const router = Router();

//Nuevo producto - privado
router.post(
	"/",
	[
		validarJWT,
		esAdmin,
		check("nombre", "El campo nombre es obligatorio")
			.notEmpty()
			.custom(existeNombre),
		check("categoria", "El campo categoria es obligatorio").notEmpty(),
		validarCampos,
	],
	crearProductos
);

//Ver productos - Público
router.get("/", [], verTodosLosProductos);

//Ver producto por ID - Público

//Actualizar producto - privado

//Eliminar producto - privado - admin

module.exports = router;
