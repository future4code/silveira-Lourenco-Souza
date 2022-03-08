function retornaChamadaDeFilme(filme) {
    let atores = (array) => {
        let frase = ''
        for (let i in array) {
            if (i == array.length - 1) {
                frase = `${frase} ${array[i]}`
            } else {
                frase = `${frase} ${array[i]},`

            }
        }
        return frase
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores(filme.atores)}.`
}

let filme = { "nome":"O Diabo Veste Prada",
 "ano":2006, "diretor":"David Frankel",
  "atores": ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] }

console.log(retornaChamadaDeFilme(filme));

// let array = [5, 6, 7, 4, 0]
// console.log(array.length - 1);

// for(i in array){
//     console.log(i);
//     if(i == array.length - 1){
//         console.log('deu certo');
//     } else {
//         console.log('deu errado');
//     }
// }