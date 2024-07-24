/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa calcula los valores de prestamo de una empresa entre el banco y la fabricante
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log("Calcula montos de una empresa")
rl.question("Ingrese el costo de las piezas: ",
    (pieceCost)   =>  { rl.question("Ingrese el numero de piezas: ", 
    (numPiece) =>  { let total = (pieceCost * numPiece );
                  let amountInvested = total >= 500000 ? total * 0.55 : total * 0.70;
                  let bankInvest = total >= 500000 ? total * 0.30 : total * 0;
                  let creditManufacturer = total >= 500000 ? total * 0.15 : total * 0.30;
                  let interestManufacturer = creditManufacturer * 0.2;
                  console.log(`Cantidad invertida: $${amountInvested}\nValor prestamo banco: $${bankInvest}\nValor crédito fabricante: $${creditManufacturer}\nInteres fabricante: $${interestManufacturer}\n`); rl.close()})});