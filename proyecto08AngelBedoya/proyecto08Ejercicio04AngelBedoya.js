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
- Este programa imprime el mes al que le corresponde un número
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa lee un número entre [1 y 12] e imprime el mes que le corresponde en el año.\nReferencia: 1=Enero. 7=Diciembre")
rl.question("Ingrese un número del 1 al 7: ", (num) => {
    let month;

    if (parseInt(num) == 1) 
        month = "Enero"; 
    else if (parseInt(num) == 2) 
        month = "Febrero"; 
    else if (parseInt(num) == 3) 
        month = "Marzo";
    else if (parseInt(num) == 4) 
        month = "Abril";
    else if (parseInt(num) == 5) 
        month = "Mayo";
    else if (parseInt(num) == 6) 
        month = "Junio"; 
    else if (parseInt(num) == 7) 
        month = "Julio";
    else if (parseInt(num) == 8) 
        month = "Agosto";
    else if (parseInt(num) == 9) 
        month = "Septiembre";
    else if (parseInt(num) == 10) 
        month = "Octubre";
    else if (parseInt(num) == 11) 
        month = "Noviembre";
    else if (parseInt(num) == 12) 
        month = "Diciembre";

    console.log(`El mes es ${month}`);
    rl.close();
});