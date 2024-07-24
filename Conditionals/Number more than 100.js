/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa valida si un numero es mayor que 100
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log(`Este programa lee por teclado si un número es mayor de 100.\n`)
rl.question("Entre el número: ", 
        (num) => {  num > 100 ? console.log("Es mayor que 100") : console.log("Es menor o igual que 100"); rl.close() } )


