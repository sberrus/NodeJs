const express = require("express");
const app = express();

//View Engine Config
app.set("view engine", "hbs");

//Midlewares
app.use(express.static("public")); //Definimos la ruta de los archivos publicos que ofrecera el servidor

app.get("/", (req, res) => {
    res.render(
        //desc: Como primer argumento, partiendo de la ruta predeterminada "./views" con el método render buscamos el archivo que deseamos renderizar. No hace falta usar la extensión para el archivo.
        "home",
        //desc: Como segundo argumento enviamos un objeto que contendra información que deseamos enviar al documento que se va a renderizar. Hay que verlo como una prop de react que se envia al template para renderizar información.
        {
            nombre: "Samuel Berrus",
            title: "Curso de Node",
            h1: "Texto enviado desde el server",
        }
    );
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
