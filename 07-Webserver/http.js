const http = require("http");

//parecido a como se trabaja con express.
const server = http.createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });
    res.write("id,nombre\n"); //devuelve un texto plano como respuesta.
    res.write("1,Fernando\n");
    res.write("2,Maria\n");
    res.write("3,Raul\n");
    res.end(); //Necesario para finalizar respuesta.
});

//Escucha del servidor.
server.listen(8080, () => {
    console.clear();
    console.log("Server en puerto 8080");
});
