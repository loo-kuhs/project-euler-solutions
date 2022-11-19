/**
 * * Solución al problema 5 de projecteuler.net
 */

/*
 * * Importar la función `primeFactor` desde el archivo `pE003.js`.
 */
import { minPolynomial, primeFactor } from "../libs/Library.js";

const MIN_MULTIPLE = 1,
  MAX_MULTIPLE = 20;

/**
 * Toma el número más pequeño y encuentra sus factores primos, luego toma el siguiente número
 * más pequeño y encuentra sus factores primos, luego multiplica los dos juntos, luego toma el
 * siguiente número más pequeño y encuentra sus factores primos, luego multiplica los tres juntos,
 * y así sucesivamente hasta que haya multiplicado todos los números juntos.
 * @param min - el número mínimo a incluir en el rango
 * @param max - el número máximo a incluir en el rango
 * @returns El número positivo más pequeño que es divisible por todos los números de min a max.
 */
const smallMultiple = (min, max) => {
  let factors = [];
  while (min <= max) {
    factors = minPolynomial(factors, primeFactor(min));
    min++;
  }
  let multiple = 1;
  while (factors.length) {
    multiple *= factors.shift();
  }
  return multiple;
};

export const pE005 = smallMultiple(MIN_MULTIPLE, MAX_MULTIPLE);