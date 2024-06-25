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
- Este programa imprime si dos numeros ingresados por el usuario son ambos impares o ambos pares
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa lee dos (2) números, e imprime si ambos son pares o ambos son impares:\n")
rl.question("Entre el primer numero: ",
    (n1) =>  { rl.question("Entre el segundo numero: ", 
    (n2) =>  { n1 % 2 == 0 && n2 % 2 == 0 ? console.log("Ambos son pares") : 
               n1 % 2 == 1 && n2 % 2 == 1 ? console.log("Ambos son impares") : console.log(" "); rl.close()})});