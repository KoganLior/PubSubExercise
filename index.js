


function* generator() {
    yield 1
    console.log('lala')
    yield 2

    for(let i = 0; i < 4; i++){
        yield i
    }
    yield 'Lior'
}

for(const num of generator()){
    console.log(num)
}