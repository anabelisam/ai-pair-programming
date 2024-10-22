/*
Diseñaremos un juego de adivinanzas sencillo en el que el usuario tenga que adivinar una palabra secreta basada en pistas progresivas y estará desarrollado en Javascript. 
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Declaración de variables para la palabra secreta
let palabraSecreta = "casa";
let intentos = 5;
let pistas = ["Es un lugar donde vives", "Tiene cuatro paredes", "Es donde sueles dormir"];
let pistasUsadas = 0;

//Función para mostrar la pista actual
function mostrarPista() {
  if (pistasUsadas < pistas.length) {
    console.log(pistas[pistasUsadas]);
    pistasUsadas++;
  } else {
    console.log("No hay más pistas disponibles.");
  }
}

//Función para verificar si la palabra ingresada es la correcta
function verificarPalabra(palabraIngresada) {
  if (palabraIngresada === palabraSecreta) {
    console.log("¡Felicidades! Has adivinado la palabra secreta.");
    return true;
  } else {
    console.log("Palabra incorrecta. Intenta de nuevo.");
    intentos--;
    console.log("Te quedan " + intentos + " intentos.");
    return false;
  }
}

//Función principal del juego
function jugar() {
  console.log("¡Bienvenido al juego de adivinanzas!");
  console.log("Adivina la palabra secreta basada en las pistas.");
  console.log("Tienes " + intentos + " intentos.");

  function pedirPalabra() {
    if (intentos > 0) {
      rl.question("Ingresa una palabra: ", (palabraIngresada) => {
        if (verificarPalabra(palabraIngresada)) {
          rl.close();
        } else {
          mostrarPista();
          pedirPalabra();
        }
      });
    } else {
      console.log("¡Lo siento! No has adivinado la palabra secreta.");
      console.log("La palabra secreta era: " + palabraSecreta);
      rl.close();
    }
  }

  pedirPalabra();
}

//Iniciar el juego
jugar();

//Testing de la documentación en Mintlify