/**
 * * Solución al problema 2 de projecteuler.net
 */

const NUMBER = 4000000;

/**
 * Suma todos los números pares en la secuencia de Fibonacci que son menores 
 * a 4 millones.
 * 
 * La secuencia de Fibonacci es una serie de números donde cada número es 
 * la suma de los dos números anteriores. Los dos primeros números son 0 y 1.
 * 
 * Los diez primeros números de la sucesión de Fibonacci son:
 * => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 * 
 * Los primeros diez números pares en la sucesión de Fibonacci son:
 * => 0, 2, 8, 34
 * 
 * La suma de los primeros diez números pares en la sucesión de Fibonacci es:
 * =>  0 + 2 + 8 + 34 = 44
 * 
 * @returns La suma de todos los números pares en la secuencia de Fibonacci hasta 4 millones.
 */
const fiboEvenNumber = (number) => {
  let sum = 0,
    x = 1,
    y = 2;

  while (x <= number) {
    if (x % 2 === 0) {
      sum += x;
    }
    let z = x + y;
    x = y;
    y = z;
  }
  return sum;
};

export const pE002 = fiboEvenNumber(NUMBER);