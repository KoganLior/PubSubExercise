function primeHas4Digits(primeNumber){
    if((primeNumber.toString().length)===4){
        console.log("The number has 4 digits . if you subtract it from 10k you get :"+(10000-primeNumber))
    }
}
export default primeHas4Digits;