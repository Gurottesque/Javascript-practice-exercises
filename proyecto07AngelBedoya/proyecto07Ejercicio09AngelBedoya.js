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
- Este programa calcula el valor del tercer ángulo en un triángulo
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite el valor del primer angulo: ",
    (angle1) =>  { rl.question("Por favor digite el valor del segundo angulo: ", 
    (angle2)      =>  { console.log(`\nEl valor del tercer angulo de un triangulo con angulos de ${angle1} y ${angle2} es de ${180 - angle1 - angle2}`); rl.close()})});