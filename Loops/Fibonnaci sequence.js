/*
- Fecha de publicación: 19/06/2024
- Hora: 9:24 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa escribe la sucesión de fibonacci siempre que sean menores a 10.000 (Diez Mil)
*/

console.log(`Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va
sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.`);

//Funcion principal que muestra los números de la sucesiónn de Fibbonacci cuando el valor de este es menor a 10000
function Fibonacci(n1, n2) {
    //Usamos n1 y n2 como terminos de la sucesión
    if (n1 < 10000) {
        process.stdout.write(n1 + ", "); //Muestra en consola el n1 con la coma y el espacio sin hacer salto de linea
        Fibonacci(n2, (n1 + n2)); 
    }
}; //Fin función

//Llamada a la función principal
Fibonacci(0, 1);