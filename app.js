const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    let contenido = {
        personaje: "Iron Man",
        edad: 39,
        url: req.url
    }

    res.write(JSON.stringify(contenido));
    res.end;
}).listen(3000);
console.log("Escuchando en el puerto 3000...");