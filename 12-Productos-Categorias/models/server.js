const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = "/api/users";
		this.authPath = "/api/auth";

		//DB Conection
		this.conectarDB();

		//Middlewares
		this.middlewares();

		//Rutas de la app
		this.routes();
	}

	async conectarDB() {
		await dbConection();
	}

	middlewares() {
		//Directorio público
		this.app.use(express.static("public"));

		//Cors config
		this.app.use(cors());

		//Lectura y parseo del body
		this.app.use(express.json());
	}

	routes() {
		//Se suele ordenar las rutas por orden alfabético.
		this.app.use(this.authPath, require("../routes/auth"));
		this.app.use(this.usersPath, require("../routes/user"));
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo en puerto ${this.port}`);
		});
	}
}
module.exports = Server;
