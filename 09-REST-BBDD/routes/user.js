const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
	getUsers,
	postUsers,
	putUsers,
	patchUsers,
	deleteUsers,
} = require("../controllers/usuarios");
const router = Router();

router.get("/", getUsers);
router.post(
	"/",
	//express-validator
	[
		check("nombre", "El nombre es obligatorio").notEmpty(),
		check("password", "El password es obligatorio").notEmpty(),
		check(
			"password",
			"El password debe tener mínimo 6 caractéres"
		).isLength({ min: 6 }),
		check("correo", "El correo no es valido").isEmail(),
		check("role", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
		validarCampos,
	],
	postUsers
);
router.put("/:id", putUsers);
router.patch("/", patchUsers);
router.delete("/", deleteUsers);

module.exports = router;
