/*
- Fecha de publicación: 19/06/2024
- Hora: 10:30 am
- Versión de su código 2
- Nombre del lenguaje: JavaScript
- Versión del lenguaje: ECMASCRIPT 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Corte 4 Bootcamp
    Descripción: El programa muestra los terminos solicitados de la serie de Padovan
*/

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Padovan
 
// Función recursiva para calcular el termino de la serie de Padovan
const terminoPadovan = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Padovan
  if (termino === 0) return 1; // Primer término de la serie de Padovan
  if (termino === 1) return 0; // Segundo término de la serie de Padovan
  if (termino === 2) return 0; // Tercer término de la serie de Padovan

  // Calcula el término actual como la suma del doble del anterior termino más el que está dos terminos anteriores
  return terminoPadovan(termino - 2) + terminoPadovan(termino - 3);
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Padovan
function seriePadovan (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoPadovan(n) + ", ");//Mostramos el termino de Padovan sin hacer salto de linea usando la función terminoPadovan
    seriePadovan(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoPadovan(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

seriePadovan(nTermino, 0);//Llamada a la función principal.