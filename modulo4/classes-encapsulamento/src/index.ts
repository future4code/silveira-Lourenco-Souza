// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  // ###
    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }
  // ###
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
  // ###
    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }
  // ###
  private balance: number = 0;
  private transactions: Transaction[] = [];

    public getBalance():number{
      return this.balance
    }

    public setBalance(balance:number):void{
      this.balance = balance
    }
  // ###
    public getTransactions():Transaction[]{
      return this.transactions
    }

    public setTransactions(transactions:Transaction):void{
      this.transactions.push(transactions)
    }
  // ###

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

// #############################################################################################################
// Exercício 1

// a) Para definir os valores dos atributos do objeto em sua criação. No caso de exemplo acima, para iniciar o constructor seria:
// const minhaConta = new UserAccount(informações...)

const minhaConta = new UserAccount("066.055.044-80", "Lourenço", 26)
// b) Uma vez

// c) Usando os gettlers e settlers

// #############################################################################################################
// Exercício 2

class Transaction 
{
  private description:string
  private value:number
  private date:string
  // ###
    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }
  // ###
    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }
  // ###
    public getDate(): string {
        return this.date;
    }

    public setDate(date: string): void {
        this.date = date;
    }
  // ###

  constructor(description: string, value: number, date: string)
  {
    this.description = description
    this.value = value
    this.date = date
  }
}

const myTrade = new Transaction("Registros de transações da minha conta bancária", 10000, "20-06-2022")

minhaConta.setTransactions(myTrade)

// #############################################################################################################
// Exercício 3

class Bank
{
  private accounts:UserAccount[]

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }

    public setAccounts(accounts: UserAccount[]): void {
        this.accounts = accounts;
    }

  constructor(accounts:UserAccount[])
  {
    this.accounts = accounts
  }
}