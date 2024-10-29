/**
 * Diseñaremos un juego de adivinanzas sencillo en el que el usuario 
 * tenga que adivinar una palabra secreta basada en pistas progresivas y 
 * estará desarrollado en Javascript, toda la interacción de entradas y 
 * salidas serán por consola
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Creamos una función para elegir la palabra secreta
function elegirPalabraSecreta() {
    //Creamos un array con las palabras secretas
    let palabrasSecretas = ["javascript", "html", "css", "php", "python", "java", "csharp", "ruby", "swift", "go"];
    //Creamos una variable para elegir una palabra secreta aleatoria
    let palabraSecreta = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
    //Retornamos la palabra secreta
    return palabraSecreta;
}

//Creamos una función para mostrar las pistas
function mostrarPistas(palabraSecreta) {
    //Creamos una variable para almacenar las pistas
    let pistas = "";
    //Creamos un bucle para recorrer la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        //Si la letra es la primera o la última, la mostramos
        if (i === 0 || i === palabraSecreta.length - 1) {
            pistas += palabraSecreta[i];
        } else {
            //Si no, mostramos un guión
            pistas += "_";
        }
    }
    //Retornamos las pistas
    return pistas;
}

//Creamos una función para jugar
//Modificamos la función jugar para usar readline
function jugar() {
    let palabraSecreta = elegirPalabraSecreta();
    let pistas = mostrarPistas(palabraSecreta);
    let intentos = 0;
    let resultado = "";

    console.log("¡Bienvenido al juego de adivinanzas!");
    console.log("Adivina la palabra secreta.");

    function pedirLetra() {
        console.log(pistas);
        rl.question("Introduce una letra: ", (letra) => {
            resultado = "";
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (letra === palabraSecreta[i]) {
                    resultado += letra;
                } else {
                    resultado += pistas[i];
                }
            }
            pistas = resultado;
            intentos++;

            if (resultado === palabraSecreta) {
                console.log(`¡Felicidades! Has adivinado la palabra "${palabraSecreta}" en ${intentos} intentos.`);
                rl.close();
            } else {
                pedirLetra();
            }
        });
    }

    pedirLetra();
}

//Ejecutamos la función jugar
jugar();