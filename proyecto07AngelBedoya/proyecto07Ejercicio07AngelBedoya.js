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
- Este programa concatena nombre, apellido y año de nacimiento digitado por el usuario
*/


const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Salida por pantalla:\n")
rl.question("Por favor digite su nombre: ",
    (name)      =>  { rl.question("Por favor digite su apellido: ", 
    (lastName)  =>  { rl.question("Por favor digite su año de nacimiento: " , 
    (year)      =>  { console.log(`${name} ${lastName} ${year}`); rl.close()}) } )});