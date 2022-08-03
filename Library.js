import { GRID } from './Utils.js';

/**
 * * Toma dos cadenas, las invierte, las suma, invierte el resultado
 * * y devuelve el resultado.
 * @param a - El primer número a sumar
 * @param b - "1"
 * @returns La suma de los dos números.
 */
export const sum = (a, b) => {
  let aLength = a.length,
    bLength = b.length;
  let sum = "",
    cr = 0,
    x,
    y;

  for (let i = 1; (i <= aLength || i <= bLength); i++) {
    x = i > aLength ? 0 : parseInt(a.charAt(aLength - i), 10);
    y = i > bLength ? 0 : parseInt(b.charAt(bLength - i), 10);
    sum = ((x + y + cr) % 10) + "" + sum;
    cr = Math.floor((x + y + cr) / 10);
  }
  if (cr > 0) {
    sum = cr + "" + sum;
  }
  return sum;
};

/**
 * * Utiliza una búsqueda binaria para encontrar la raíz cuadrada
 * * entera de un número.
 * @param x - El número para encontrar la raíz cuadrada de.
 * @returns La raíz cuadrada del número.
 */
export const sqrt = (x) => {
  if (x < 0) throw new Error("Raíz cuadrada de número negativo.");
  let y = 0;
  for (let i = 1 << 15; i !== 0; i >>= 1) {
    y |= i;
    if (y > 46340 || y * y > x) y ^= i;
  }
  return y;
};

/**
 * * Si el número es menor que 2, no es primo. De lo contrario, si
 * * es divisible por 2, no es primo. De lo contrario, si es
 * * divisible por cualquier número impar desde 3 hasta la raíz
 * * cuadrada del número, no es primo. De lo contrario, es primo.
 * @param x - El número a probar.
 * @returns Una función que toma un número y devuelve un valor booleano.
 */
export const isPrime = (x) => {
  try {
    if (x < 0) throw new Error("Numero negativo");
    let end = Math.floor(Math.sqrt(x));
    if (x === 0 || x === 1) {
      return false;
    } else if (x === 2) {
      return true;
    } else {
      if (x % 2 === 0) {
        return false;
      }
      for (let i = 3; i <= end; i += 2) {
        if (x % i === 0) {
          return false;
        }
      }
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

const listPrimes = (number) => {
  let isPrime = new Boolean([listPrimes(number)]);
  let count = 0;
  for (b of isPrime) {
    if (b) count++;
  }
  let result = [count];
  for (let i = 0, j = 0; i < isPrime.length; i++) {
    if (isPrime[i]) {
      result[j] = i;
      j++;
    }
  }
  return result;
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
 * * Dado un número, devuelve la suma de todos los números del 1 a
 * * ese número.
 * @param number - el numero de filas en el triangulo
 */
export const triangle = (number) => (number * (number + 1)) / 2;

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

/**
 * * Toma un punto de partida (ox, oy) y una dirección (dx, dy) y devuelve el
 * * producto de los números en la cuadrícula en esa dirección.
 * @param ox - coordenada x del origen
 * @param oy - coordenada y del primer número
 * @param dx - el cambio en x para cada paso
 * @param dy - el cambio en y entre cada número en la secuencia
 * @param number - el número de números adyacentes a multiplicar
 * @returns El producto de los números en la cuadrícula.
 */
export const gridProduct = (ox, oy, dx, dy, number) => {
  let result = 1;

  for (let i = 0; i < number; i += 1) {
    result *= GRID[oy + i * dy][ox + i * dx];
  }
  return result;
};
