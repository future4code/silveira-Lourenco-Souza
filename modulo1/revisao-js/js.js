// function retornaPessoasAutorizadas(pessoas) {
//     let autorizadas = pessoas.filter((value) => {
//         if (value.idade > 14 && value.idade < 60 && value.altura >= 1.5)
//             return true
//     })
// }

let array = [
    { "nome": "A", "idade": 12, "altura": 1.8 }, 
    { "nome": "B", "idade": 20, "altura": 1.3 }, 
    { "nome": "C", "idade": 15, "altura": 1.9 }, 
    { "nome": "D", "idade": 22, "altura": 1.8 }, 
    { "nome": "E", "idade": 10, "altura": 1.2 }, 
    { "nome": "F", "idade": 70, "altura": 1.9 }]

let novo = array.filter((value) =>{
    return (value.idade > 14 && value.idade < 60 && value.altura >= 1.5)
         

})

console.log(novo);