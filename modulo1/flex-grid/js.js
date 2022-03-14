function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let y = 0
    for (let c; c < arrayDeNumeros.length; c++) {
        if (c === numeroEscolhido) {
            y = y + 1
        }
        console.log(y);
    }
    
    if(y !== 0) {
        return `O número ${numeroEscolhido} aparece ${y}x`
    } else {
        return `Número não encontrado`
    }

}

let arr = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5];

let times = 4


// contaOcorrencias(arr, times)
console.log(contaOcorrencias(arr, times));