/**
 * * Solución al problema 4 de projecteuler.net
 */

import { isPalindrome } from "../libs/Library.js";

const NUM1 = 100,
  NUM2 = 999;

/**
 * Recorre todos los números entre el mínimo y el máximo, y para cada número, recorre todos
 * los números entre el mínimo y el máximo, y para cada uno de esos números, los multiplica,
 * y si el producto es un palíndromo y es mayor que el máximo actual, fija el máximo al producto.
 * @param min - el numero mínimo para multiplicar
 * @param max - el numero máximo a multiplicar
 * @returns El producto palíndromo más grande de dos números de 3 dígitos.
 */
const largestPalindromeProduct = (min, max) => {
  let maxim = 0,
    product,
    a = min;
  while (a <= max) {
    let b = min;
    while (b <= max) {
      product = a * b;
      if (isPalindrome(product) && product > maxim) {
        maxim = product;
      }
      b++;
    }
    a++;
  }
  return maxim;
};

export const pE004 = largestPalindromeProduct(NUM1, NUM2);