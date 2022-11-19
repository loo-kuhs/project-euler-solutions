import chalk from "chalk";
import * as solution from "./src/handlers/solutionHandler.js";

const solNum = chalk.bold.hex("#fee440");
const success = chalk.underline.hex("#06d6a0");
const text = chalk.hex("#f5efff");
const print = console.log;

Object.keys(solution).forEach((result, index) =>
  print(
    `${text(
      `Resultado del problema ${solNum(index + 1)}: ${success(
        solution[result]
      )}`
    )}\n`
  )
);