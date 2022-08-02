import isMersenne from "./clients/mersenne.js";
import primeHas1 from "./clients/prime1.js";
import primeHas4Digits from "./clients/prime4Digits.js";
import PrimeGenerator from "./publishers/primesGenerator.js";

function runApp(limitNumber) {
  const testGenerator = new PrimeGenerator(limitNumber);
  testGenerator.on("PrimeNumber", primeHas1, primeHas4Digits, isMersenne);
  testGenerator.generatePrimeNumbers();
}

export default runApp