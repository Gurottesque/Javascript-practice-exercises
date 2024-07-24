/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula si un número es capicúa
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

rl.question("Digite un número: ",
           (num) => {num[0] == num[2] ? console.log("El numero es capicua") : console.log("No es capicua"); rl.close() }
           );