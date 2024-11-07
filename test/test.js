const readlineSync = require('readline-sync');

// Solicitamos los números usando readline-sync
const numero1 = parseFloat(readlineSync.question("Ingrese el primer número: "));
const numero2 = parseFloat(readlineSync.question("Ingrese el segundo número: "));

// Realizamos la suma
const suma = numero1 + numero2;

// Mostramos el resultado
console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
