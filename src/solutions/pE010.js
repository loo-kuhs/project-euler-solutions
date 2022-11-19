/**
 * * Solución al problema 10 de projecteuler.net
 */

import { isPrime } from "./src/libs/Library.js";

const NUMBER = 2000000;

/**
 * Empezamos con un número y luego le restamos uno hasta llegar a cero. Para cada
 * número que restamos, comprobamos si es primo.
 * Si es así, lo sumamos a la suma. Cuando llegamos a cero, devolvemos la suma.
 *
 * @param number - El número al que quieres sumar todos los números primos
 * @returns La suma de todos los números primos hasta el número proporcionado.
 */
const sumAllPrimeNumsUntil = (number) => {
  let sum = 0;
  while (number--) {
    if (isPrime(number)) {
      sum += number;
    }
  }
  return sum;
};

let result = sumAllPrimeNumsUntil(NUMBER);
console.log(result);
