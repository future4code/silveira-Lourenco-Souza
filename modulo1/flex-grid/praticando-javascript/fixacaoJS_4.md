~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let y = 0

    for (let c in arrayDeNumeros) {
        if (arrayDeNumeros[c] === numeroEscolhido) {
            y = y + 1
        }
    }
    

    if(y > 0) {
        return `O número ${numeroEscolhido} aparece ${y}x`
    } else {
        return `Número não encontrado`
    }
}
~~~