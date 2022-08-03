/**
 * * Solución al problema 5 de projecteuler.net
 */

/*
 * * Importar la función `primeFactor` desde el archivo `pE003.js`.
 */
import { primeFactor } from "./Library.js";

const MIN_MULTIPLE = 1,
  MAX_MULTIPLE = 20;

/**
 * * Toma dos matrices de números y devuelve una nueva matriz de
 * * números que contiene todos los números de las dos matrices de
 * * entrada, pero sin duplicados.
 * @param mP1 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
 * 25 , 26, 27, 28, 29, 30, ... ]
 * @param mP2 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
 * 25 , 26, 27, 28, 29, 30, ... ]
 * @returns El resultado de la ordenación por fusión.
 */
const minPolynomial = (mP1, mP2) => {
  let result = [],
    x,
    y;

  while (mP1.length || mP2.length) {
    if (mP1.length === 0) {
      result.push(mP2.shift());
    } else if (mP2.length === 0) {
      result.push(mP1.shift());
    } else {
      x = mP1[0];
      y = mP2[0];
      if (x < y) {
        result.push(mP1.shift());
      } else if (x > y) {
        result.push(mP2.shift());
      } else {
        result.push(mP1.shift());
        mP2.shift();
      }
    }
  }
  return result;
};

/**
 * * Toma el número más pequeño y encuentra sus factores primos,
 * * luego toma el siguiente número más pequeño y encuentra sus
 * * factores primos, luego multiplica los dos juntos, luego toma el
 * * siguiente número más pequeño y encuentra sus factores primos,
 * * luego multiplica los tres juntos , y así sucesivamente hasta
 * * que haya multiplicado todos los números juntos.
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

let result = smallMultiple(MIN_MULTIPLE, MAX_MULTIPLE);
console.log(result);