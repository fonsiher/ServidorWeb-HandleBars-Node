const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'));

//Establecer el motor para las viwe
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: "edWin herNANdez moYA",
        //mes: new Date.getMonth(),
        pagina: 'Home'
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        //mes: new Date().getMonth(),
        pagina: 'About'
    });
});

/*app.get('/', function(req, res) {
    //res.send('Hola mundo desde express')
     let salida = {
        nombre: "Edwin Hernandez",
        edad: 21,
        url: req.url
    };
    res.send(salida);
})

app.get('/data', (req, res) => {
    res.send('data');
}) */

app.listen(3000, () => {
    console.log("Servidor Iniciado, escuchando en el puerto 3000");
})