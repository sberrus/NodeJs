const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();

const puerto = process.env.PORT;

//Handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials"); //Creando parciales para poder segmentar el código

//Midlewares
app.use(express.static("public")); //Definimos la ruta de los archivos publicos que ofrecera el servidor

app.get("/", (req, res) => {
    res.render(
        //desc: Como primer argumento, partiendo de la ruta predeterminada "./views" con el método render buscamos el archivo que deseamos renderizar. No hace falta usar la extensión para el archivo.
        "home",
        //desc: Como segundo argumento enviamos un objeto que contendra información que deseamos enviar al documento que se va a renderizar. Hay que verlo como una prop de react que se envia al template para renderizar información.
        {
            nombre: "Samuel Berrus",
            title: "Home Page",
            h1: "Texto enviado desde el server",
        }
    );
});

app.get("/generic", (req, res) => {
    res.render("generic", {
        nombre: "Samuel Berrus",
        title: "About",
        h1: "Texto enviado desde el server",
    });
});
app.get("/elements", (req, res) => {
    res.render(
        "elements",

        {
            nombre: "Samuel Berrus",
            title: "Resources",
            h1: "Texto enviado desde el server",
        }
    );
});

app.get("*", (req, res) => {
    res.send("page not found");
});

app.listen(puerto, () => {
    console.log(`Server en puerto en ${puerto}`);
});
