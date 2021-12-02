const { Router } = require("express");
const { check } = require("express-validator");
const { crearCategoria } = require("../controllers/categories");

const { validarJWT, validarCampos } = require("../middlewares");

const router = Router();

//Obtener todas las categorias - Public
router.get("/", (req, res) => {
	console.log("Todas las categorias");
	res.send("todo ok");
});

//Crear Categoría - private - global
router.post(
	"/",
	[
		check("nombre", "El nombre es obligatorio").notEmpty(),
		validarJWT,
		validarCampos,
	],
	crearCategoria
);

//Obtener categoria por id - public
router.get("/:id", (req, res) => {
	console.log("Categoria por id");
	res.send("todo ok");
});

//Actualizar registros por id - private - global
router.put("/:id", (req, res) => {
	console.log("Nueva categoría");
	res.send("todo ok");
});

//Eliminar categoria - admin only
router.delete("/:id", (req, res) => {
	console.log("Nueva categoría");
	res.send("todo ok");
});

module.exports = router;
