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

/**
 * Si el número es 1000, devuelve "mil". De lo contrario, si el número es mayor que 99, devuelve el
 * número de centenas, la palabra "centena" y el número de decenas y unidades. De lo contrario, si el
 * número es mayor o igual a 10 y menor a 20, devuelva el número de adolescentes. De lo contrario,
 * devuelve el número de decenas y el número de unidades.
 * @param number - El número a convertir en palabras.
 * @returns una cuerda.
 */
const numberToWords = (number) => {
  const TENS = (number) => {
    if (number < 10) {
      return NUMS2TEXT.ONES[number];
    } else if (number >= 10 && number < 20) {
      return NUMS2TEXT.TEENS[number - 10];
    } else {
      return NUMS2TEXT.TENS[Math.floor(number / 10)] + " " + NUMS2TEXT.ONES[number % 10];
    }
  };

  const HUNDREDS = (number) => {
    if (number > 99) {
      return (
        NUMS2TEXT.ONES[Math.floor(number / 100)] +
        " hundred " +
        (number % 100 === 0 ? "" : "and " + TENS(number % 100))
      );
    } else {
      return TENS(number);
    }
  };

  if (number === 1000) {
    return "one thousand";
  } else {
    return HUNDREDS(number);
  }
};

/**
 * Toma un número, lo convierte en palabras, elimina todos los espacios y devuelve la longitud de la
 * cadena resultante.
 * @param number - El número para contar las letras de.
 * @returns El número de letras en las palabras de los números del 1 al número pasado.
 */
const countLetters = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += numberToWords(i).replace(/\s/g, "").length;
  }
  return sum;
};

const pE017 = countLetters(1000);
export default pE017;