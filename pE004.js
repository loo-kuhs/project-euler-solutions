/**
 * * Solución al problema 4 de projecteuler.net
 */

const NUM1 = 100, NUM2 = 999;

/**
 * * Tomamos el número, lo dividimos por 10 y sumamos el resto 
 * * a la variable inversa, que se multiplica por 10 cada vez.
 * @param number - El número a comprobar.
 * @returns El reverso del número.
 */
const isPalindrome = (number) => {
  let provisional = number,
    reverse = 0;

  while (provisional !== 0) {
    reverse = reverse * 10 + (provisional % 10);
    provisional = Math.floor(provisional / 10);
  }
  return reverse === number;
};

/**
 * * Recorre todos los números entre el mínimo y el máximo, y para 
 * * cada número, recorre todos los números entre el mínimo y el 
 * * máximo, y para cada uno de esos números, los multiplica, y si 
 * * el producto es un palíndromo y es mayor que el máximo actual, 
 * * fija el máximo al producto.
 * @param min - el numero minimo para multiplicar
 * @param max - el numero maximo a multiplicar
 * @returns El producto palíndromo más grande de dos números de 3 dígitos.
 */
const lgstPalindromeProduct = (min, max) => {
  let maxim = 0,
    product,
    a = min;
  while (a <= max) {
    let b = min;
    while (b <= max) {
      product = a * b;
      if (isPalindrome(product) && product > maxim) {
        maxim = product;
      } b++;
    } a++;
  }
  return maxim;
};

let result = lgstPalindromeProduct(NUM1, NUM2);
console.log(result);