/**
 * * Solución al problema 11 de projecteuler.net
 */

import { GRID, gridProduct } from "./miLibreria.js";

const CONSECUTIVE = 4;

/**
 * * Recorre la cuadrícula y, para cada celda, verifica el producto de
 * *las cuatro posibles líneas de contras de longitud que pasan por esa celda.
 * @param grid - una matriz 2D de enteros
 * @param cons - el numero de numeros consecutivos a multiplicar
 * @returns El mayor producto de cuatro números adyacentes en la misma dirección (arriba, abajo,
 * izquierda, derecha o diagonal) en la cuadrícula de 20×20.
 */
const greatestProduct = (grid, cons) => {
  let ans = -1;
  let width = grid[0].length,
    height = grid.length;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x + cons <= width) {
        ans = Math.max(gridProduct(x, y, 1, 0, cons), ans);
      }
      if (y + cons <= height) {
        ans = Math.max(gridProduct(x, y, 0, 1, cons), ans);
      }
      if (x + cons <= width && y + cons <= height) {
        ans = Math.max(gridProduct(x, y, 1, 1, cons), ans);
      }
      if (x - cons >= -1 && y + cons <= height) {
        ans = Math.max(gridProduct(x, y, -1, 1, cons), ans);
      }
    }
  }
  return ans;
};

let result = greatestProduct(GRID, CONSECUTIVE);
console.log(result);