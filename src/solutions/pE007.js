/**
 * * Solución al problema 7 de projecteuler.net
 */

/**
 * Importar la función `isPrime` del archivo `Library.js`.
 */
import { isPrime } from "../libs/Library.js";

const PRIME = 10001;

/**
 * Incremente num hasta que sea primo, luego incremente i hasta que sea igual al número pasado.
 * @param number - El número del primo que quieres encontrar.
 * @returns El n-ésimo número primo.
 */
const nthPrime = (number) => {
  let num = 1,
    i = 0;
  while (i < number) {
    num++;
    while (!isPrime(num)) {
      num++;
    }
    i++;
  }
  return num;
};

const pE007 = nthPrime(PRIME);
export default pE007;