/**
 * * Solución al problema 6 de projecteuler.net
 */

const NATURAL_NUMBERS = 100;

/**
 * * Para cada número del 1 al número dado, agregue el número a la 
 * * suma y agregue el cuadrado del número a la suma de los 
 * * cuadrados. Luego devuelve el cuadrado de la suma menos la suma 
 * * de los cuadrados
 * @param numbers - El número de números a sumar.
 * @returns La diferencia entre la suma de los cuadrados de los cien primeros números naturales y el
 * cuadrado de la suma.
 */
const sumSquare = (numbers) => {
  let sum = 0,
    sum2 = 0;

  for (let i = 1; i <= numbers; i++) {
    sum += i;
    sum2 += i * i;
  }
  return sum * sum - sum2;
};

let result = sumSquare(NATURAL_NUMBERS);
console.log(result)