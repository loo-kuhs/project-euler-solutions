/**
 * * Solución al problema 13 de projecteuler.net
 */

import { sum } from "./Library.js";
import { NUMBERS } from "./Utils.js";

/**
 * * Toma una matriz de números, los suma y devuelve los primeros
 * * 10 dígitos del resultado.
 * @param numbers - una matriz de cadenas, cada una de las cuales representa un número muy grande
 * @returns Los primeros 10 dígitos de la suma de los números.
 */
const largeSum = (numbers) => {
  let result = "";
  let len = numbers.length;
  while (len--) {
    result = sum(result, numbers[len]);
  }
  return result.slice(0, 10);
};

let result = largeSum(NUMBERS);
console.log(result);