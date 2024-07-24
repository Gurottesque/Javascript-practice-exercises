/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula el valor de la compra con un descuento
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

rl.question("Por favor digite el valor de la compra: ",
           (money) => { money > 100000 ? console.log(`El valor de la compra es de: $${money * 0.8}`) : 
                                         console.log(`El valor de la compra es de: $${money}`); rl.close();
                       }
           );