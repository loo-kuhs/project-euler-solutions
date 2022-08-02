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

/**
 * * Toma una cadena, un número y una posición, y devuelve el 
 * * producto del número de caracteres en la cadena que comienza en 
 * * la posición.
 * 
 * * Por ejemplo, si llamas a la función así:
 *    ? producto("123456789", 3, 2);
 * 
 * * Devolverá el producto de los caracteres en la cadena que comienza 
 * * en la posición 2 y continúa por 3 caracteres. En este caso, 
 * * ese es el producto de los caracteres "345", que es 120.
 * @param string - la cadena para buscar
 * @param number - el número de dígitos adyacentes a multiplicar
 * @param position - la posición inicial de la subcadena
 * @returns El producto de los caracteres en la cadena.
 */
export const product = (string, number, position) => {
  let prod = 1;
  for (let i = position; i < position + number; i++) {
    prod = prod * string.charAt(i);
  }
  return prod;
};
