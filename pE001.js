/**
 * * Solución al problema 1 de projecteuler.net
 */

/**
 * * Recorre todos los números del 0 al 1000, y si el número es 
 * * divisible por 3 o 5, lo suma a la suma.
 * @returns 233168
 */

const multiples = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

let res = multiples();
console.log(res)