/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa convierte las horas, minutos y segundos digitados por el usuario a milisegundos
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

function formatNumber(number) {
    let numStr = String(number);
    
    let numParts = numStr.split('.');
    let integerPart = numParts[0];
    
    return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


console.log("Salida por pantalla:\n\nPor favor digite el numero de horas, minutos y segundos que desea convertir a milisegundos.")
rl.question("\nDigite horas: ",
    (hours) =>  { rl.question("Digite minutos: ", 
    (minutes)      =>  { rl.question("Digite segundos: " , 
    (seconds)      =>  { console.log(`\nLa cantidad de milisegundos para ${hours} hora, ${minutes} minutos y ${seconds} segundos es de ${formatNumber((60 * minutes * 1000) + (hours * 60 * 60 * 1000) + (seconds * 1000))} milisegundos`); rl.close()}) } )});