const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretWord = 'javascript';
const clues = [
  'Es un lenguaje de programación.',
  'Es ampliamente utilizado en el desarrollo web.',
  'Su nombre comienza con "J".',
  'Es conocido por su uso en el lado del cliente y del servidor.'
];

let attempts = 0;

const askForGuess = () => {
  if (attempts < clues.length) {
    console.log(`Pista ${attempts + 1}: ${clues[attempts]}`);
  } else {
    console.log('No hay más pistas disponibles.');
  }

  rl.question('Adivina la palabra secreta: ', (answer) => {
    if (answer.toLowerCase() === secretWord) {
      console.log('¡Felicidades! Has adivinado la palabra secreta.');
      rl.close();
    } else {
      console.log('Incorrecto. Inténtalo de nuevo.');
      attempts++;
      if (attempts < clues.length) {
        askForGuess();
      } else {
        console.log(`Lo siento, has agotado todas las pistas. La palabra secreta era "${secretWord}".`);
        rl.close();
      }
    }
  });
};

console.log('Bienvenido al juego de adivinanzas.');
askForGuess();