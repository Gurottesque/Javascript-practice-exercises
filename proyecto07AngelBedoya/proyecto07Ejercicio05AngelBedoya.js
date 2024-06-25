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
- Este programa convierte horas y minutos a minutos
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite la cantidad de horas: ",
    (hours)   =>  { rl.question("Por favor digite la cantidad de minutos: ", 
    (minutes) =>  { console.log(`\n${hours} horas y ${minutes} minutos equivalen a ${60 * hours + minutes * 1} minutos.`); rl.close()})});