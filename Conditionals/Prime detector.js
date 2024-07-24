/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa imprime si un número ingresado por el usuario es primo o no
-Salvedad: Solo funciona con valores del 1 al 5
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa lee un número entre uno(1) y cinco(5), e imprime si es primo o no.")
rl.question("Entre un número: ", 
        (num) => { ( num == 5 || num == 2 || num == 3) ? console.log("El número es primo") : console.log("El número no es primo"); rl.close() } )