/**
 * * Si el número es menor que 2, no es primo. De lo contrario, si 
 * * es divisible por 2, no es primo. De lo contrario, si es 
 * * divisible por cualquier número impar desde 3 hasta la raíz 
 * * cuadrada del número, no es primo. De lo contrario, es primo.
 * @param x - El número a probar.
 * @returns Una función que toma un número y devuelve un valor booleano.
 */
export const isPrime = (x) => {
  if (x < 0) throw new Error("Numero negativo");
  if (x === 0 || x === 1) {
    return false;
  } else if (x === 2) {
    return true;
  } else {
    if (x % 2 === 0) {
      return false;
    }
    for (let i = 3, end = Math.sqrt(x); i <= end; i += 2) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
};

/**
 * * Toma un número y devuelve una matriz de todos los factores
 * * primos de ese número
 * @param number - El número para encontrar el factor primo más grande.
 * @returns El mayor factor primo del número (number) .
 */
export const primeFactor = (number) => {
  let factors = [],
    d = 2;

  while (number > 1) {
    while (number % d === 0) {
      factors.push(d);
      number = number / d;
    }
    d++;
    if (d * d > number && number > 1) {
      factors.push(number);
      break;
    }
  }
  return factors;
};