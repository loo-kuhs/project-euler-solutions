/**
 * * Solución al problema 14 de projecteuler.net
 */

import { collatzConjecture } from "./libs/Library.js";

const NUM_UNDER = 1000000;

/**
 * Recorre todos los números del 1 al startNum, y para cada número calcula la longitud 
 * de la cadena, y si la longitud de la cadena es mayor que la longitud de la cadena 
 * más larga, actualiza el número y la longitud de la cadena más larga.
 * 
 * @param startNum - El número desde el que empezar la cadena.
 * @returns El número que produce la cadena más larga.
 */
const longestChain = (startNum) => {
  let longest = 1,
    number = 1,
    chain;

  for (let i = 1; i <= startNum; i++) {
    chain = collatzConjecture(i);
    if (chain.length > longest) {
      (number = i), (longest = chain.length);
    }
  }
  return number;
};

let result = longestChain(NUM_UNDER);
console.log(result);