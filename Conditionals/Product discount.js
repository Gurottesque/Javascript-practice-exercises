/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa imrpime articulo, clave y precio original y con descuento de un producto
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Imprime un articulo, clave , precio original y con descuentro")
rl.question("Ingrese la clave: ",
    (key)   =>  { rl.question("Ingrese el precio original: ", 
    (price) =>  { let discount = key == 1 ? 0.9 : key == 2 ? 0.8 : 0;
                  console.log(`Clave: ${key}\nPrecio original: $${price}\nPrecio con descuento: $${price * discount}`); rl.close()})});