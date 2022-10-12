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

  return (x, y) => {
    let paths = 0;
    if (x === 0 || y === 0) return 1;
    if (x > gridSize || y > gridSize) return -1;
    if (typeof grid[x][y] === "number") return grid[x][y];

    paths = latticePaths(x - 1, y) + latticePaths(x, y - 1);
    grid[x][y] = paths;
    return paths;
  };
})();

let result = latticePaths(GRID, GRID);
console.log(result);