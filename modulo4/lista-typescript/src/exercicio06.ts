type Client = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const clientDatabase: Client[] = 
  [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
  ]

const findNegativeClient = (data: Client[]): Client[] => {
  
  const output: Client[] = data.filter((client) => {
    
    if (client.saldoTotal - client.debitos.reduce((acumulador, numero) => {
      return acumulador += numero
    }, 0) < 0){
      return client
    }
  })

  return output
}

console.log(findNegativeClient(clientDatabase));