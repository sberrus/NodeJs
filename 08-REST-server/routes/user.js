const { Router } = require("express");
const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require("../controllers/usuarios");
const router = Router();

router.get("/", getUsers);
router.post("/", postUsers);
//desc: con el uso de los dos puntos y un nombre, podemos hacer uso de los parámetros de sección que nos permiten en la misma URL poder enviar ciertos valores que lee el backend para poder usarlos en su lógica.
router.put("/:id", putUsers);
router.patch("/", patchUsers);
router.delete("/", deleteUsers);

module.exports = router;
