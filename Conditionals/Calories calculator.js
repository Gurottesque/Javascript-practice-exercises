/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula las calorías que consume una persona
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa calcula las calorias que consume una persona")
rl.question("Actividad a realizar (sentado) o (dormido): ",
    (activity) =>  { rl.question("Tiempo en minutos de la actividad: ", 
    (time) =>  { activity == "sentado" ? console.log(`Se ha consumido ${time * 1.66} calorias`) :
                 activity == "dormido" ? console.log(`Se ha consumido ${time * 1.08} calorias`) : ""; rl.close()})});