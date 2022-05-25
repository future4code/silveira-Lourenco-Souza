// Exercício 3

const fs = require('fs')
const listaTarefa = JSON.parse(fs.readFileSync("./listaTarefas.json", 'utf8'))

const tarefa = process.argv[2]

if(tarefa === undefined){
  console.log("nenhum argumento foi inserido");
} else {

  listaTarefa.tarefas.push(tarefa)

  fs.writeFile("./listaTarefas.json", JSON.stringify(listaTarefa), err => {
    if (err) {
      console.log(err);
    }
    console.log("Tarefa adicionada com sucesso!");
  })

  console.log(listaTarefa);
}
