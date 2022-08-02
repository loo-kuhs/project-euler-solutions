/**
 * * Solución al problema 9 de projecteuler.net
 */

const NUMBER = 1000;

/**
 * * Recorre todos los valores posibles de a y b, y luego calcula c,
 * * y si a^2 + b^2 = c^2, devuelve a * b * c
 * @param number - El número para encontrar el triple pitagórico.
 * @returns El producto del triplete pitagórico cuya suma es igual al número pasado como argumento.
 */
const pythagoreanTriple = (number) => {
  for (let a = 1; a < number; a++) {
    for (let b = a + 1; b < number; b++) {
      let c = number - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
  throw new Error("No encontrado");
};

let result = pythagoreanTriple(NUMBER);
console.log(result);
