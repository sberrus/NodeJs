const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

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

        //Lectura y parseo del body
        //desc: Con este middleware podemos parsear la información que nos envia el cliente para poder usarla en nuestro backedn en formato JSON.
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usersPath, require("../routes/user"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
module.exports = Server;

/**
 * title: RUTAS DE EXPRESS.
 * desc: Las rutas en express (router) son funcionalidades de express que nos permiten manejar de forma más eficiente como se comportan cada una de las rutas de nuestra app para ordenar de mejor manera el código.
 */
