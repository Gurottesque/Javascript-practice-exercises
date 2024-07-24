/*
- Fecha de publicación: 19/06/2024
- Hora: 10:56 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa muestra los terminos solicitados de la serie de Bell
*/

const prompt = require('prompt-sync')();// se importa la libreria prompt-sync en una constante PromptSync

function doFactorial(number) {//Calcula el factorial
    if (number === 0) {
        return 1;
    } else {
        return number*doFactorial(number - 1);
    }
};//Fin función Factorial

function summationBell(n, i, accumulator) { // Función principal de las sumatorias
    if (i > n - 1) { // Si el índice i igual a n-1, es decir, si hemos iterado por todos los términos
        return accumulator; // Retorna el valor acumulado
    } else { // De lo contrario
        // Llama recursivamente a summationBell con el índice i incrementado y el acumulador actualizado
        return summationBell(n, i + 1, accumulator + (doFactorial(n - 1) / (doFactorial(i) * doFactorial((n - 1) - i))) * calculateTerm(i));
    }
};

function calculateTerm(term) {//funcion que ayuda a calcular los terminos
    if (term === 0 || term === 1) {//si es cero o uno, el termino será 1
        return 1;
    } else {//de lo contrario llama a la funcion que calcula propiamente los terminos
        return summationBell(term, 0, 0);
    }
};

function printBell(term, quantity) {//imprime uno a uno los terminos de la sumatoria
    if (term < quantity) {//mientras no sea igual al "n", seguirá iterando
        process.stdout.write(calculateTerm(term) + ", ");//llama a la funcion que calcula los terminos
        printBell(term + 1, quantity);
    } else {
        process.stdout.write(calculateTerm(term) + ".");//cuando sea el ultimo termino, le agg un punto
    }
};

let quantityTerms = prompt ( "Ingrese el termino: ");
printBell(0, parseInt(quantityTerms) - 1);//llama a la funcion que imprime