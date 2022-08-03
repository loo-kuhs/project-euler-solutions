/**
 * * Constantes utiles
 */
export const GRID = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

class miLibreria {}

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
