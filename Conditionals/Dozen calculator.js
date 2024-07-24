/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula el monto a pagar de las docenas de un producto
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

rl.question("Ingrese docenas: ",
    (dozen)     =>  { rl.question("Ingrese precio de unidad: ", 
    (unitPrice) =>  { let discount = dozen > 3 ? 0.85 : 0.9;
                      let gift = dozen > 3 ? dozen - 3 : 0;
                      console.log(`Monto de la compra $${unitPrice * (dozen * 12)}\nMonto descuento $${(unitPrice * (dozen * 12)) * (1 - discount)}\nMonto a pagar $${(unitPrice * (dozen * 12)) * discount}\nNumero unidades obsequio ${gift}`); rl.close()})});