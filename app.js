import isMersenne from "./clients/mersenne.js";
import primeHas1 from "./clients/prime1.js";
import primeHas4Digits from "./clients/prime4Digits.js";
import PrimeGenerator from "./publishers/primesGenerator.js";


const testGenerator = new PrimeGenerator(1111)
testGenerator.on("PrimeNumber",primeHas1,primeHas4Digits,isMersenne)
testGenerator.generatePrimeNumbers()