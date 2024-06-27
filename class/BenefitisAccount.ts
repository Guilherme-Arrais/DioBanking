import { DioAccount } from "./DioAccount"

export class BenefitisAccount extends DioAccount{
    constructor(name: string, accountNumber: number, depositvalue:number){
        super(name, accountNumber, depositvalue)
      }
}