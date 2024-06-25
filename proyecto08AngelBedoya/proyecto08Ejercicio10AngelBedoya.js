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
- Este programa calcula si un estudiante aprueba o reprueba
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa calcula si un alumno aprueba un curso")
rl.question("\nPrimera nota: ",
    (note1) =>  { rl.question("Segunda nota: ", 
    (note2)      =>  { rl.question("Tercera nota: " , 
    (note3)      =>  { (note1 * 1 + note2 * 1 + note3 * 1) / 3 >= 3.0 ? console.log("Aprueba") : console.log("Reprueba"); rl.close()}) } )});