/**
 * * Solución al problema 17 de projecteuler.net
 */

const NUMS2TEXT = {
  ONES: [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
  TEENS: [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  TENS: [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ],
};

class NumberConverter {
  /**
   * Crea una instancia de NumberConverter.
   * @param {number} number - Número a convertir.
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * Convierte un número a palabras.
   * @param {number} number - Número a convertir.
   * @returns {string} - La representación en palabras del número.
   */
  toWords(number) {
    /**
     * Convierte un número de dos dígitos a palabras.
     * @param {number} number - El número de dos dígitos a convertir.
     * @returns {string} - La representación en palabras del número.
     */
    const TENS = (number) => {
      if (number < 10) {
        return NUMS2TEXT.ONES[number];
      } else if (number < 20) {
        return NUMS2TEXT.TEENS[number - 10];
      } else {
        return `${NUMS2TEXT.TENS[Math.floor(number / 10)]} ${
          NUMS2TEXT.ONES[number % 10]
        }`;
      }
    };

    /**
     * Convierte un número de tres dígitos a palabras.
     * @param {number} number - El número de tres dígitos a convertir.
     * @returns {string} - La representación en palabras del número.
     */
    const HUNDREDS = (number) => {
      if (number > 99) {
        return `${NUMS2TEXT.ONES[Math.floor(number / 100)]} hundred ${
          number % 100 === 0 ? "" : "and "
        }${TENS(number % 100)}`;
      } else {
        return TENS(number);
      }
    };

    if (number === 1000) {
      return "one thousand";
    } else {
      return HUNDREDS(number);
    }
  }

  /**
   * Cuenta el número de letras de una palabra.
   * @param {string} word - Palabra a contar letras.
   * @returns {number} - Número de letras de la palabra.
   */
  countLetters(word) {
    return word.replace(/\s/g, "").length;
  }
}
/**
 * Cuenta la cantidad de letras en la representación en palabras de un rango de números.
 * @param {number} number - El límite superior del rango de números.
 * @returns {number} - La cantidad de letras en la representación en palabras de los números del rango.
 */
const countLetters = (number) => {
  const converter = new NumberConverter(number);
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += converter.countLetters(converter.toWords(i));
  }
  return sum;
};

const pE017 = countLetters(1000);
export default pE017;