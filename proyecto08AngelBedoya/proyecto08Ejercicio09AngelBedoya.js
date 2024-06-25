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
- Este programa calcula si una inversión es segura con unos parametros escritos
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Este programa lee dos valores. Interés(%) y Capital. Si el dinero recibido por intereses es mayor que $7000, se le indicara al inversionista\nque invierta, de lo contrario se le indicara que no debe invertir")
rl.question("Entre el interés en %: ",
    (interest) =>  { rl.question("Entre el capital a invertir en $: ", 
    (capital) =>  { newSalary = capital * (interest / 100);
                    newSalary > 7000 ? console.log(`INVIERTA, SU SALDO SERA $${newSalary * 1 + capital * 1}`) :
                                       console.log("NO INVIERTA") ; rl.close()})});