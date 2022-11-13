console.log('Hola');

const http = require('http');

const host = '0.0.0.0'
const port = 3000

const Server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end("Hola Mundu")
});

Server.listen(port,host, () => {
    console.log("Server encendido en " + host + "/" + port);
})