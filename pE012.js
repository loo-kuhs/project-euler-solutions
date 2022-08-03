/**
 * * Solución al problema 12 de projecteuler.net
 */

import { primeFactor, triangle } from "./Library.js";

const NUMBER = 500;

/**
 * * Toma un número y devuelve el número de divisores que tiene.
 * @param number - entero positivo
 * @returns El número de divisores de un número.
 */
const nthDivisor = (number) => {
  let prime = primeFactor(number);
  let num = 1;
  while (prime.length) {
    let current = prime.shift();
    let count = 1;
    while (current === prime[0] && prime.length) {
      prime.shift();
      count++;
    }
    num = num * (count + 1);
  }
  return num;
};

/**
 * * "Encuentra el primer número triangular con más de 'n' divisores".
 * 
 * * La función `triángulo` es una función auxiliar que devuelve el 
 * * enésimo número triangular. La función `nthDivisor` es una 
 * * función auxiliar que devuelve el número de divisores de un número.
 * 
 * * La función `firstTriangular` comienza en 1 y sigue aumentando 
 * * hasta que el número de divisores del n-ésimo número triangular 
 * * es mayor que el número pasado.
 * 
 * * Aquí está la función `triángulo`:
 * @param number - El número de divisores que quieres encontrar.
 * @returns El primer número triangular con más de 500 divisores.
 */
const firstTriangular = (number) => {
  let i = 1;
  while (nthDivisor(triangle(i)) <= number) {
    i++;
  }
  return triangle(i);
};

let result = firstTriangular(NUMBER);
console.log(result);