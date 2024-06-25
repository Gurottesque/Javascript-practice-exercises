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
- Este programa calcula el salario de un trabajador segun sus horas trabajadas
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

rl.question("Digite las horas trabajadas: ",
           (hours) => { hours <= 40 ? console.log(`Salario: $${hours * 16}`) : 
                                      console.log(`Salario: $${(hours * 16) + (hours - 40) * 20}`); rl.close();
                       }
           );