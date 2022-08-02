import MyEvent from "../common/myEvent.js";
class PrimeGenerator extends MyEvent{
  constructor(limit) {
    super()
    this.generator=this.getNextPrime(limit)
    
  }

  *getNextPrime(limit) {
    for (let i = 1; i <= limit; i++) {
        function isPrime(num) {
            for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                return false;
              }
            }
            return true;
          }


      if (isPrime(i)) {
          yield i;
      }
    }
  }
  generatePrimeNumbers() {
    const timerID= setInterval(()=>{
        let currentPrime=this.generator.next().value
        //checks if the generator has finished yeilding
        if(!currentPrime){
            clearInterval(timerID)
            return
        }
        console.log(currentPrime)
    },1000)
      
  }
}

const myPrimeGen = new PrimeGenerator(11)
myPrimeGen.generatePrimeNumbers()

