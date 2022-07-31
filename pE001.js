/**
 * * Solución al problema 1 de projecteuler.net
 */

const NATURAL_NUMBER = 1000;

/**
 * * Toma un número y dos múltiplos, y devuelve la suma de todos
 * * los números debajo del número que son múltiplos de los dos múltiplos.
 * @param number - el numero a contar hasta
 * @param multiple1 - 3
 * @param multiple2 - 3
 * @returns La suma de todos los múltiplos de 3 y 5 menores de 1000.
 */
const sumMultiples = (number, multiple1, multiple2) => {
  let sum = 0;
  if (multiple1 < 0 || multiple2 < 0) throw new Error("Solo numeros positivos");
  for (let i = 0; i < number; i++) {
    if (i % multiple1 === 0 || i % multiple2 === 0) {
      sum += i;
    }
  }
  return sum;
};

let result = sumMultiples(NATURAL_NUMBER, 3, 5);
console.log(result);
