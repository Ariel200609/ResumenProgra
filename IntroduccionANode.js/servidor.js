// Importar el módulo HTTP de Node.js
const http = require('http');

// Definir el puerto donde escuchará el servidor
const PUERTO = 3000;

// Crear el servidor
const servidor = http.createServer((req, res) => {
    // Establecer el encabezado de respuesta con tipo de contenido texto plano
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Enviar el cuerpo de la respuesta
    res.end('¡Mi primer servidor con Node.js!\n');
});

// Iniciar el servidor
servidor.listen(PUERTO, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PUERTO}/`);
});