/**
 * * Solución al problema 1 de projecteuler.net
 */

/**
 * Una variable constante que se establece en 1000.
 */
const NATURAL_NUMBER = 1000;

class MultipleSum {
  /**
   * Crea un instancia de MultipleSum.
   * @param {Array} multiples - Array de números múltiplos.
   */
  constructor(multiples) {
    this.sum = 0;
    this.multiples = multiples;
  }

  /**
   * Calcula la suma de todos los múltiplos de los números almacenados en la propiedad
   * multiples que sean menores que number.
   * @param {number} number - Límite superior para el cálculo de los múltiplos. 
   * @returns {number} La suma de los múltiplos.
   */
  calculate(number) {
    for (let i = 0; i < number; i++) {
      for (const multiple of this.multiples) {
        if (i % multiple === 0) {
          this.sum += i;
          break;
        }
      }
    }
    return this.sum;
  }
}

/**
 * Toma un número y dos múltiplos, y devuelve la suma de todos los múltiplos de
 * esos dos números hasta el número.
 * @param {number} number - El número hasta el que se suman los múltiplos de múltiplos.
 * @param {number} multiple1 - El primer múltiplo en sumar
 * @param {number} multiple2 - El segundo múltiplo a sumar.
 * @returns {number} La suma de todos los múltiplos de 3 o 5 por debajo del número pasado.
 * @throws {Error} Si multiple1 o multiple2 no son números enteros positivos.
 */
const sumMultiples = (number, multiple1, multiple2) => {
  if (Number.isInteger(multiple1) && multiple1 > 0) {
    const multiples = [multiple1, multiple2];
    const multipleSum = new MultipleSum(multiples);
    return multipleSum.calculate(number);
  } else {
    throw new Error(
      `El argumento 'multiples' debe ser un número entero mayor que 0`
    );
  }
};

const pE001 = sumMultiples(NATURAL_NUMBER, 3, 5);
export default pE001;