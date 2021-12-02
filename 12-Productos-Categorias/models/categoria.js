const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
	nombre: {
		type: String,
		required: [true, "El nombre es obligatorio"],
	},
	estado: {
		type: Boolean,
		required: true,
		default: true,
	},
	//El siguiente campo es un campo que dentro tendra un schema de usuario pero para no hacer el Schema entero, hacemos una referencia a otro Schema ya existente, en este caso "Usuario"
	usuario: {
		//??
		type: Schema.Types.ObjectId,
		//El Schema de referencia que va a usar este campo
		ref: "Usuario",
		//Todas las categorias deben tener un usuario que las haya creado
		required: true,
	},
});

module.exports = model("Categoria", CategoriaSchema);
