/**
 * * Solución al problema 15 de projecteuler.net
 */

const GRID = 20;

const latticePaths = (() => {
  let gridSize = 20,
    grid = [gridSize];
  for (let i = 0; i <= gridSize; i++) {
    grid[i] = [gridSize];
  }

  return (gridX, gridY) => {
    let paths = 0;
    if (gridX === 0 || gridY === 0) return 1;
    if (gridX > gridSize || gridY > gridSize) return -1;
    if (typeof grid[gridX][gridY] === "number") return grid[gridX][gridY];

    paths = latticePaths(gridX - 1, gridY) + latticePaths(gridX, gridY - 1);
    grid[gridX][gridY] = paths;
    return paths;
  };
})();

const pE015 = latticePaths(GRID, GRID);
export default pE015;