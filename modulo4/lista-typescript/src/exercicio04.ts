enum DEPARTMENT {
  MARK = "marketing",
  SELL = "vendas",
  FIN = "finançeiro"
}

type employee = {
  nome: string,
  salário: number,
  setor: DEPARTMENT,
  presencial: boolean
}


const employeesDatabase: employee[] = [
  { nome: "Marcos", salário: 2500, setor: DEPARTMENT.MARK, presencial: true },
  { nome: "Maria", salário: 1500, setor: DEPARTMENT.SELL, presencial: false },
  { nome: "Salete", salário: 2200, setor: DEPARTMENT.FIN, presencial: true },
  { nome: "João", salário: 2800, setor: DEPARTMENT.MARK, presencial: false },
  { nome: "Josué", salário: 5500, setor: DEPARTMENT.FIN, presencial: true },
  { nome: "Natalia", salário: 4700, setor: DEPARTMENT.SELL, presencial: true },
  { nome: "Paola", salário: 3500, setor: DEPARTMENT.MARK, presencial: true }
]

const filterByDepart = (data: employee[]): employee[] => {
  
  const output: employee[] = data.filter((worker) => {
    return worker.setor === DEPARTMENT.MARK && worker.presencial === true
  })

  return output
}

console.log(filterByDepart(employeesDatabase));