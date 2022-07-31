/**
 * * Solución al problema 3 de projecteuler.net
 */

/* 
 * * Importar la función `primeFactor` desde el archivo `miLibreria.js` 
 */
import { primeFactor } from "./miLibreria.js";

const NUM = 600851475143;

/**
 * * Encontrar el mayor factor primo del número 600851475143.
 */
let result = primeFactor(NUM);
let largestPrime = [0];
for (let i = 0; i < result.length; i++) {
  if (largestPrime < result[i]) {
    largestPrime = result[i];
  }
}
console.log(largestPrime);