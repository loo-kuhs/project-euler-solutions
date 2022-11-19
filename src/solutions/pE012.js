/**
 * * Solución al problema 12 de projecteuler.net
 */

import { nthDivisor, triangleNumber } from "../libs/Library.js";

const NUMBER = 500;

/**
 * "Encuentra el primer número triangular con más de 'n' divisores".
 *
 * La función `triángulo` es una función auxiliar que devuelve el enésimo número
 * triangular. La función `nthDivisor` es una función auxiliar que devuelve el número
 * de divisores de un número.
 *
 * La función `firstTriangular` comienza en 1 y sigue aumentando hasta que el número
 * de divisores del n-ésimo número triangular es mayor que el número pasado.
 *
 * @param number - El número de divisores que quieres encontrar.
 * @returns El primer número triangular con más de 500 divisores.
 */
const firstTriangular = (number) => {
  let i = 1;
  while (nthDivisor(triangleNumber(i)) <= number) {
    i++;
  }
  return triangleNumber(i);
};

const pE012 = firstTriangular(NUMBER);
export default pE012;