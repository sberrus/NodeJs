const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("Hola Mundo!");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
