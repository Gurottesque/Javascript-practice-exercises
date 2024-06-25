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
- Este programa calcula el pago de un estacionamiento en horas y minutos
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Calcula pago estacionamiento")
rl.question("Ingrese tiempo en horas: ",
    (hours)   =>  { rl.question("Ingrese tiempo en minutos: ", 
    (minutes) =>  { let fraccion = hours != 0 ? parseInt(minutes / 60) : 0;
                    let payment = ((hours * 1 + fraccion * 1) * 1800 );
                    console.log(`Se debe pagar $${payment}`); rl.close()})});