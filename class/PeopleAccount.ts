import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, depositvalue:number){
    super(name, accountNumber, depositvalue)
    this.doc_id = doc_id
  }
}