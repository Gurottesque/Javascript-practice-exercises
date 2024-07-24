/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula las cuatro operaciones básicas en dos numeros digitados por el usuario
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite el primer numero: ",
    (num1)  =>  { rl.question("Por favor digite el segundo numero: ", 
    (num2)  =>  { console.log(`\nSuma: ${num1 * 1 + num2 * 1}\nResta: ${num1 * 1 - num2 * 1}\nMultiplicacion: ${num1 * num2 }\nDivision: ${num1 / num2}`); rl.close()})});