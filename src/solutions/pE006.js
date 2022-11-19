/**
 * * Solución al problema 6 de projecteuler.net
 */

const NATURAL_NUMBERS = 100;

/**
 * Calcula la diferencia entre la suma de los cuadrados de los primeros números
 * naturales y el cuadrado de la suma.
 * @param numbers - El número de números a sumar.
 * @returns La diferencia entre la suma de los cuadrados de los cien primeros números naturales y el
 * cuadrado de la suma.
 */
const sumSquareDifference = (numbers) => {
  let sum = 0,
    sum2 = 0;

  for (let i = 1; i <= numbers; i++) {
    sum += i;
    sum2 += i * i;
  }
  return sum * sum - sum2;
};

export const pE006 = sumSquareDifference(NATURAL_NUMBERS);