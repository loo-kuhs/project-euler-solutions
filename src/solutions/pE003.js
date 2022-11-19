/**
 * * Solución al problema 3 de projecteuler.net
 */

/**
 * Importar la función `primeFactor` desde el archivo `Library.js`
 */
import { primeFactor } from "../libs/Library.js";

const NUM = 600851475143;

/**
 * Encontrar el mayor factor primo del número 600851475143.
 */
const largestPrimeFactor = (number) => {
  let factorPrime = primeFactor(number);
  let largestPrime = [0];

  for (let i = 0; i < factorPrime.length; i++) {
    if (largestPrime < factorPrime[i]) {
      largestPrime = factorPrime[i];
    }
  }
  return largestPrime;
};

export const pE003 = largestPrimeFactor(NUM);