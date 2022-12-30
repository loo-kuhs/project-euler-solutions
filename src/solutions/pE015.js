/**
 * * Solución al problema 15 de projecteuler.net
 */

const GRID = 20;

/**
 * Comenzamos en la esquina superior izquierda de la cuadrícula y buscamos recursivamente 
 * el número de caminos a la esquina inferior derecha sumando el número de caminos desde 
 * la celda a la izquierda y la celda arriba
 * @param gridSize - El tamaño de la cuadrícula.
 * @returns El número de rutas desde la esquina superior izquierda hasta la esquina 
 * inferior derecha de una cuadrícula de tamaño gridSize.
 */
const latticePaths = (gridSize) => {
  let cache = {};

  const initGrid = () => {
    for (let i = 0; i <= gridSize; i++) {
      for (let j = 0; j <= gridSize; j++) {
        cache[`${i},${j}`] = null;
      }
    }
  };

  const getPaths = (x, y) => {
    if (x === 0 || y === 0) return 1;
    if (cache[`${x},${y}`] !== null) return cache[`${x},${y}`];
    const paths = getPaths(x - 1, y) + getPaths(x, y - 1);
    cache[`${x},${y}`] = paths;
    return paths;
  };

  initGrid();
  return getPaths(gridSize, gridSize);
};

const pE015 = latticePaths(GRID);
export default pE015;