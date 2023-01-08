/**
 * * Solución al problema 2 de projecteuler.net
 */

/**
 * Una constante que se utiliza para limitar el número de iteraciones. 
 */
const NUMBER = 4000000;

class Fibonacci {
  /**
   * Crea una instancia de Fibonacci.
   */
  constructor() {
    this.sum = 0;
    this.lastEvenNumber = 0;
    this.evenNumbers = [];
  }

  /**
   * Añade un número par a la suma y al array de números pares.
   * @param {number} number - Número par a añadir.
   */
  addEvenNumber(number) {
    this.sum += number;
    this.evenNumbers.push(number);
    this.lastEvenNumber = number;
  }

  /**
   * Calcula la suma de los números pares de la serie Fibonacci menores o iguales que
   * number.
   * @param {number} number - Límite superior para el cálculo de los números pares de
   * la serie Fibonacci.
   * @returns {number} Suma de los números pares de la serie Fibonacci.
   */
  calculate(number) {
    if (number < this.lastEvenNumber) {
      return this.sum;
    }

    let x = 1,
      y = 2;

    while (y <= number) {
      if (y % 2 === 0) {
        this.addEvenNumber(y);
      }

      const z = x + y;
      x = y;
      y = z;
    }

    return this.sum;
  }
}

/**
 * Calcula la suma de los números pares de la serie Fibonacci menores o iguales que number.
 * @param {number} number - Límite superior para el cálculo de los números pares.
 * @returns {number} Suma de los números pares.
 * @throws {Error} Si number no es un número entero positivo.
 */
const fiboEvenNumber = (number) => {
  if (Number.isInteger(number) && number > 0) {
    const fibonacci = new Fibonacci();
    return fibonacci.calculate(number);
  } else {
    throw new Error(`El número ${number} no es un número entero positivo.`);
  }
};

const pE002 = fiboEvenNumber(NUMBER);
export default pE002;