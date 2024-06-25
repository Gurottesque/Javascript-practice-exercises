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
- Este programa calcual e imprime el precio a pagar por camisas aplicando descuentos
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Calcula total a pagar por compra de camisas aplicando descuentos")
rl.question("Ingrese número de camisas: ",
    (numShirts)   =>  { rl.question("Ingrese el precio: ", 
    (price) =>  { let discount = numShirts >= 3 ? 0.8 : 0.9;
                  console.log(`Precio con descuento: $${price * discount}`); rl.close()})});