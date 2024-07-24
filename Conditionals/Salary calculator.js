/* 
-Fecha de publicación 19/05/2024
-Hora: 4:00 am
- Versión de su código 2.3
- Nombre del lenguaje utilizado Javascript
- Versión del lenguaje utilizado ECMAScript 2023
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa imprime calcula el sueldo de un trabajador con unos parametros entrados
*/

const readline = require('readline');
const { stdin : input, stdout : output } = require('node:process');
const rl = readline.createInterface( { input , output } );

console.log(`Este programa leyendo por teclado la antigüedad en años, calcula el sueldo mensual que le corresponde al trabajador de una empresa
que cobra 40.000 euros anuales, el programa
debe realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.\n`)
rl.question("Entre el número de años de antiguedad del trabajador: ", 
        (years) => { let salary = (years * 40000) / 12 ;
                     let rate;
                     
                     if (years >= 10) 
                        rate = 0.1;
                     else if (years < 10 && years > 5)
                         rate = 0.07;
                     else if (years < 5 && years > 3)
                         rate = 0.05;
                     else if (years < 3) 
                        rate = 0.03;

                     console.log((salary + salary * rate).toFixed(2)); rl.close() } )


