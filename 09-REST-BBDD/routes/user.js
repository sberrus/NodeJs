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
const { esRoleValido, existeEmail } = require("../helpers/db-validators");
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
		check("correo").custom(existeEmail),
		/* 		check("role", "No es un rol válido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
		 */
		check("role").custom(esRoleValido),
		validarCampos,
	],
	postUsers
);
router.put(
	"/:id",
	[
		check("correo").custom(existeEmail),
		check(
			"password",
			"El password debe tener mínimo 6 caractéres"
		).isLength({ min: 6 }),
		check("role").custom(esRoleValido),
	],
	validarCampos,
	putUsers
);
router.patch("/", patchUsers);
router.delete("/", deleteUsers);

module.exports = router;
