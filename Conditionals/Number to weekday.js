/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa imprime el dia que corresponde un número entre 1 y 7
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa lee un número entre [1 y 7] e imprime el día que le corresponde en la semana.\nReferencia: 1=Lunes. 7=Domingo")
rl.question("Ingrese un número del 1 al 7: ", (num) => {
    let day;

    if (parseInt(num) == 1) 
        day = "Lunes"; 
    else if (parseInt(num) == 2) 
        day = "Martes"; 
    else if (parseInt(num) == 3) 
        day = "Miércoles";
    else if (parseInt(num) == 4) 
        day = "Jueves";
    else if (parseInt(num) == 5) 
        day = "Viernes";
    else if (parseInt(num) == 6) 
        day = "Sábado"; 
    else if (parseInt(num) == 7) 
        day = "Domingo";
    

    console.log(`El día es ${day}`);
    rl.close();
});