//imports
const { Router } = require("express");
const { check } = require("express-validator");

//Controllers
const {
	crearProductos,
	verTodosLosProductos,
	verProductoPorID,
} = require("../controllers/product");

//Helpers
const { existeNombre, existeProducto } = require("../helpers/db-validators");

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
router.get("/", verTodosLosProductos);

//Ver producto por ID - Público
router.get(
	"/:id",
	[check("id").notEmpty().isMongoId().custom(existeProducto), validarCampos],
	verProductoPorID
);

//Actualizar producto - privado

//Eliminar producto - privado - admin

module.exports = router;
