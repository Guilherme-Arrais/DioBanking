
export abstract class DioAccount {
    private name: string
  private readonly accountNumber: number
   balance: number =0 
  private depositvalue:number
  private status: boolean = true
  private getValue:any
  constructor(name: string, accountNumber: number, depositvalue:number){
    this.name = name
    this.accountNumber = accountNumber
    this.depositvalue= depositvalue
  
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

   getName = (): any => {
    console.log(this.name)
  }
   depositBenefitis=()=>{
    this.balance=this.depositvalue+10
   }
  deposit = (): void => {
    if(this.validateStatus()){
      this.balance=this.depositvalue
    }
  }

  withdraw = (number:any): void => {
    this.balance= this.balance-number
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
