/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa imprime toma tres números y valida si la multiplicación de los dos primeros es igual al tercero
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa toma tres numeros y ve si la multiplicacion de los 2 primeros es igual al tercero")
rl.question("\nDigite número uno: ",
    (n1) =>  { rl.question("Digite número dos: ", 
    (n2) =>  { rl.question("Digite número tres: " , 
    (n3) =>  { n1 * n2 == n3 ? console.log("La multiplicacion de los dos primeros es igual al tercero") : console.log("La multiplicacion de los dos priemros no es igual al tercero"); rl.close()}) } )});