/*
- Fecha de publicación: 19/06/2024
- Hora: 10:40 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa muestra los terminos solicitados de la serie de Narayana
*/

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Narayana
 
// Función recursiva para calcular el termino de la serie de Narayana
const terminoNarayana = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Narayana
  if (termino === 0 || termino === 1 || termino === 2) return 1; // Primer, Segundo y Tercer término de la serie de Narayana

  // Calcula el término actual como la suma del anterior termino más el que está dos terminos anteriores
  return terminoNarayana(termino - 2) + terminoNarayana(termino - 3);
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Narayana
function serieNarayana (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoNarayana(n) + ", ");//Mostramos el termino de Narayana sin hacer salto de linea usando la función termiNarayana
    serieNarayana(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoNarayana(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

serieNarayana(nTermino, 0);//Llamada a la función principal.