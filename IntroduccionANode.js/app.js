// app.js
console.log("Hola Mundo desde Node.js");

const matematica = require('./matematica.js');
console.log(matematica.sumar(5, 3)); // 8
console.log(matematica.restar(5, 3)); // 2
console.log(matematica.multiplicar(5, 3)); // 15
console.log(matematica.dividir(20, 10)); // 2