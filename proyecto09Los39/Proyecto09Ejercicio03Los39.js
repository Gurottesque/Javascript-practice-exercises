/*
- Fecha de publicación: 19/06/2024
- Hora: 10:19 am
- Versión de su código 2
- Autores. Ing(c) Juan Fernand Cano Duque & Angel Bedoya
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa muestra los terminos solicitados de la serie de Lucas
*/

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Lucas
 
// Función recursiva para calcular el termino de la serie de Lucas
const terminoLucas = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Lucas
  if (termino === 0) return 2; // Primer término de la serie de Lucas
  if (termino === 1) return 1; // Segundo término de la serie de Lucas

  // Calcula el término actual como la suma de los dos términos anteriores
  return terminoLucas(termino - 1) + terminoLucas(termino - 2);
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Lucas
function serieLucas (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoLucas(n) + ", ");//Mostramos el termino de lucas sin hacer salto de linea usando la función terminoLucas
    serieLucas(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoLucas(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

serieLucas(nTermino, 0);//Llamada a la función principal.