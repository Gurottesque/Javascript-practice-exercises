/*
- Fecha de publicación: 19/06/2024
- Hora: 10:00 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa escribe la sucesión de fibonacci siempre que sean menores a 100 y al final muestra la suma de términos
*/


console.log(`Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.
Los números a sumar son: `);

//Función principal que encuentra los números en la sucesion de fibonacci y la suma de esos digitos
function sumaFibonacci (suma, n1, n2) {
    //Usamos suma como acumulador de los terminos que se van encontrando, n1 y n2 como terminos
    if (n1 < 100) {
        process.stdout.write(n1 + ", ");//Escribimos los terminos conforme se van encontrando sin hacer salto de linea 
        sumaFibonacci(suma + n1, n2, (n1 + n2));//Llamada recursiva de la funcion principal
    } else {
        console.log("y su suma es " + suma);
    }
};//Fin funcion principal

sumaFibonacci(0, 0, 1);