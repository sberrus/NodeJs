const { Router } = require("express");
const { check } = require("express-validator");
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
	[check("correo", "El correo no es valido").isEmail()],
	postUsers
);
router.put("/:id", putUsers);
router.patch("/", patchUsers);
router.delete("/", deleteUsers);

module.exports = router;
