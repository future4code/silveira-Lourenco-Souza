type Consulta = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

const ConsultasOrdenadas = (consultas: Consulta[]): Consulta[] => {
  
  const sorted = consultas.sort((a: any, b: any) => a.nome.localeCompare(b.nome))

  return sorted
}
const lista: Consulta[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

console.log(ConsultasOrdenadas(lista));
