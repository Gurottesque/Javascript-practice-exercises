/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
-Autores. Ing(c) Angel Andrés Bedoya Calderón
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula el perímetro de un rectangulo con largo y ancho
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite el largo del rectangulo: ",
    (height) =>  { rl.question("Por favor digite el ancho del rectangulo: ", 
    (width)  =>  { console.log(`\nEl perimetro de un rectangulo con largo ${height} y largo ${width} es de ${2 * height + 2 * width}.`); rl.close()})});