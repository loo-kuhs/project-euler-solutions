/**
 * * Solución al problema 3 de projecteuler.net
 */
const NUM = 600851475143;
/**
 * * Toma un número y devuelve una matriz de todos los factores
 * * primos de ese número
 * @param number - El número para encontrar el factor primo más grande.
 * @returns El mayor factor primo del número (number) .
 */
export function primeFactor(number) {
  let factors = [],
    d = 2;

  while (number > 1) {
    while (number % d === 0) {
      factors.push(d);
      number = number / d;
    }
    d++;
    if (d * d > number && number > 1) {
      factors.push(number);
      break;
    }
  }
  return factors;
};

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
