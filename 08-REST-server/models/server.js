const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de la app
        this.routes();
    }
    middlewares() {
        //Directorio público
        this.app.use(express.static("public"));

        //Cors config
        this.app.use(cors());
    }

    routes() {
        this.app.get("/api", (req, res) => {
            res.json({ msg: "GET" });
        });
        this.app.post("/api", (req, res) => {
            res.status(201).json({ msg: "POST" });
        });
        this.app.put("/api", (req, res) => {
            res.json({ msg: "PUT" });
        });
        this.app.patch("/api", (req, res) => {
            res.json({ msg: "PATCH" });
        });
        this.app.delete("/api", (req, res) => {
            res.json({ msg: "DELETE" });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
module.exports = Server;

/**
 * desc: CORS: Cors es una forma que tenemos para proteger a nuestro servidor estableciendo reglas que nos permitan indicarle al servidor y al navegador desde que url`s podemos y damos acceso a dicha información.
 *
 * desc: Los navegadores modernos ya piden que el cors este habilitado en el backend de las peticiones que se vayan a consumir. Lo que nos permite el cors es indicar explicitamente desde que dominios se pueden realizar peticiones a nuestro backend, o por otro lado, permitir que se pueda consumir desde cualquier sitio.
 */
