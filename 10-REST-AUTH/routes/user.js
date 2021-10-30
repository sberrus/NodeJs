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
const {
	esRoleValido,
	existeEmail,
	existeUsuarioPorId,
} = require("../helpers/db-validators");
const { validarJWT } = require("../middlewares/validar-jwt");
const { isValidRole } = require("../middlewares/validar-roles");
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
		check("role").custom(esRoleValido),
		validarCampos,
	],
	postUsers
);
router.put(
	"/:id",
	[
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(existeUsuarioPorId),
		check("correo").custom(existeEmail),
		check(
			"password",
			"El password debe tener mínimo 6 caractéres"
		).isLength({ min: 6 }),
		check("role").custom(esRoleValido),
		validarCampos,
	],
	putUsers
);
router.patch("/", patchUsers);
router.delete(
	"/:id",
	[
		validarJWT,
		isValidRole("ADMIN_ROLE", "YOLO_ROLE"),
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(existeUsuarioPorId),
		validarCampos,
	],
	deleteUsers
);

module.exports = router;
