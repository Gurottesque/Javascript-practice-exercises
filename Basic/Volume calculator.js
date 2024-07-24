/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula el volumen de una esfera con su radio
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite el radio de la esfera: ",
           (radius) => { console.log(`\nEl volumen de una esfera de radio ${radius} es de ${((4/3 * Math.PI) * radius ** 3).toFixed(5)}`); rl.close();
                       }
           );