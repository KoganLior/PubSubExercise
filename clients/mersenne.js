function isMersenne(primeNumber){
    if (primeNumber > 2)
    {
        let power = 0;
        let n = 0;
        while (power <= primeNumber + 1)
        {
            power = parseInt(Math.pow(2,n));
            if (power == primeNumber + 1)
            {
                console.log("this number is also a Mersenne prime number");
                return;
            }
            n++;
        }
    }
}
