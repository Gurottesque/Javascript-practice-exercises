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
- Este programa calcula el IMC de una persona
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Calcula indice de masa corporal")
rl.question("Ingrese el peso: ",
    (weight)   =>  { rl.question("Ingrese la altura: ", 
    (height) =>  { let imc = (weight / (height ** 2) );
                  if (imc < 16) console.log("Criterio de ingreso en hospital");
                  else if (imc > 16 && imc < 17) console.log("infrapeso");
                  else if (imc > 17 && imc < 18) console.log("bajo peso");
                  else if (imc > 18 && imc < 25) console.log("peso normal (saludable)");
                  else if (imc > 25 && imc < 30) console.log("sobrepeso (obesidad de grado I)");
                  else if (imc > 30 && imc < 35) console.log("sobrepeso crónico (obesidad de grado II)");
                  else if (imc > 35 && imc < 40) console.log("obesidad premórbida (obesidad de grado III)");
                  else if (imc > 40) console.log("obesidad mórbida (obesidad de grado IV)");
                  rl.close()})});