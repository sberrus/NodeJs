const express = require("express");
const app = express();

//View Engine Config
app.set("view engine", "hbs");

//Midlewares
app.use(express.static("public")); //Definimos la ruta de los archivos publicos que ofrecera el servidor

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", (req, res) => {
    res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
    res.send("page not found");
});

app.listen(8080, () => {
    console.log("Server en puerto 8080");
});
