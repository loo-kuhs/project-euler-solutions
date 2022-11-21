/**
 * * Solución al problema 16 de projecteuler.net
 */

const NUM_POW = 1000;
const NUM_BASE = 2;
/**
 * Toma una base y una potencia, y devuelve la suma de los dígitos de la base elevados
 * a la potencia.
 * @param base - el numero base
 * @param pow - la potencia para elevar la base
 * @returns La suma de los dígitos del número 2^1000.
 */
const powerDigitSum = (base, pow) => {
  let digits = [1];
  while (pow--) {
    let carry = 0;
    for (let i = 0; i < digits.length; i++) {
      let num = base * digits[i] + carry;
      digits[i] = num % 10;
      carry = Math.floor(num / 10);
    }
    while (carry > 0) {
      digits.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }
  let sum = 0;
  while (digits.length) {
    sum += digits.shift();
  }
  return sum;
};

const pE016 = powerDigitSum(NUM_BASE, NUM_POW);
export default pE016;