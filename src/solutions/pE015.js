/**
 * * Solución al problema 15 de projecteuler.net
 */

const GRID = 20;

class LatticePaths {
  /**
   * Crea una instancia de LatticePaths.
   * @param {number} gridSize - Tamaño de la cuadrícula.
   */
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.cache = [];
    
  }

  /**
   * Inicializa el caché de caminos.
   * Para cada fila y columna de la cuadrícula, cree una nueva matriz en el objeto de caché.
   */
  initCache() {
    for (let i = 0; i <= this.gridSize; i++) {
      for (let j = 0; j <= this.gridSize; j++) {
        if (!this.cache[i]) {
          this.cache[i] = [];
        }
        this.cache[i][j] = null;
      }
    }
  }

  /**
   * Calcula el número de caminos para llegar a una coordenada específica de la cuadricula.
   * @param {number} x - Coordenada x.
   * @param {number} y - Coordenada y.
   * @returns {number} - Número de caminos para llegar a la coordenada.
   */
  getPaths(x, y) {
    if (x < 0 || x > this.gridSize || y < 0 || y > this.gridSize) {
      /* Si la coordenada está fuera de los límites de la cuadricula, devuelve 0 caminos. */
      return 0;
    } else if (x === 0 && y === 0) {
      /* Si la coordenada está en la primera fila o columna, devuelve 1 camino. */
      return 1;
    } else if (this.cache[x][y] !== null) {
      /* Si la coordenada ya está en el caché, devuelve el número de caminos almacenados. */
      return this.cache[x][y];
    } else {
      /* Si la coordenada no está en el caché, calcula el número de caminos para llegar a la coordenada. */
      const paths = this.getPaths(x - 1, y) + this.getPaths(x, y - 1);
      this.cache[x][y] = paths;
      return paths;
    }
  }
}

/**
 * Calcula el número de caminos para llegar a la esquina inferior derecha de una cuadrícula
 * de tamaño gridSize.
 * @param {number} gridSize - Tamaño de la cuadrícula.
 * @returns {number} - Número de caminos para llegar a la esquina inferior derecha de la cuadrícula.
 * @throws {Error} - Si gridSize no es un número entero positivo.
 */
const latticePaths = (gridSize) => {
  if (Number.isInteger(gridSize) && gridSize > 0) {
    const paths = new LatticePaths(gridSize);
    paths.initCache();
    return paths.getPaths(gridSize, gridSize);
  } else {
    throw new Error(
      `gridSize debe ser un número entero positivo. gridSize = ${gridSize}`
    );
  }
};

const pE015 = latticePaths(GRID);
export default pE015;