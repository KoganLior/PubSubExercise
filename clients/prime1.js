import chalk from "chalk";

//checks if the prime number ends with one
function primeHas1(primeNumber) {
  if (primeNumber % 10 === 1) {
    console.log(chalk.red("The prime number ends with 1 "));
  }
}

export default primeHas1;
