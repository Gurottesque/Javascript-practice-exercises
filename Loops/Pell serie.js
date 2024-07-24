/*
- Fecha de publicación: 19/06/2024
- Hora: 10:22 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa muestra los terminos solicitados de la serie de Pell
*/

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Pell
 
// Función recursiva para calcular el termino de la serie de Pell
const terminoPell = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Pell
  if (termino === 0) return 0; // Primer término de la serie de Pell
  if (termino === 1) return 1; // Segundo término de la serie de Pell

  // Calcula el término actual como la suma del doble del anterior termino más el que está dos terminos anteriores
  return 2 * terminoPell(termino - 1) + terminoPell(termino - 2);
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Pell
function seriePell (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoPell(n) + ", ");//Mostramos el termino de Pell sin hacer salto de linea usando la función terminoPell
    seriePell(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoPell(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

seriePell(nTermino, 0);//Llamada a la función principal.