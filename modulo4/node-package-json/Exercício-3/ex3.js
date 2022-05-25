// Exercício 3

const tarefa = process.argv[2]
const listaTarefa = {tarefas: ["Nadar", "Fazer nada"]}

listaTarefa.tarefas.push(tarefa)
console.log("Tarefa adicionada com sucesso!");
console.log(listaTarefa);