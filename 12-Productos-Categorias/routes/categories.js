const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

//Obtener todas las categorias - Public
router.get("/", (req, res) => {
	console.log("Todas las categorias");
	res.send("todo ok");
});

//Crear Categoría - private - global
router.post("/", (req, res) => {
	console.log("Nueva categoría");
	res.send("todo ok");
});

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
