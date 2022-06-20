type Transaction = {
  description: string,
  value: number,
  date: string
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

}

// a) Para definir os valores dos atributos do objeto em sua criação. No caso de exemplo acima, para iniciar o constructor seria:
// const minhaConta = new UserAccount(informações...)