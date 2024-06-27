import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, depositvalue:number){
    super(name, accountNumber, depositvalue)
  }

  getLoan = (empNumber:any): any => {
    let num = parseInt(empNumber, 10)
    this.balance=this.balance+num
    console.log('Voce depositou'+ empNumber)
  }
}
