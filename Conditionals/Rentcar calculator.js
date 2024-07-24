/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula el monto a pagar de un auto rentado
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

rl.question("Digite los kilometros recorridos: ",
           (km) => { let cobro15 = (300 - km) > 700 ? 700 * 15000 : (300 - km) > 0 ? (300 - km) * 15000 : 0;
                     let cobro10 = (1000 - km) > 0 ? (1000 - km) * 10000 : 0;
                    console.log(`Monto a pagar: $${400000 + cobro15 + cobro10}`); rl.close();
                       }
           );