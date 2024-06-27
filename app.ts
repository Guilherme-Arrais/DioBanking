import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import * as readline from 'readline';
import { BenefitisAccount } from './class/BenefitisAccount';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // Pergunta ao usuário para digitar um valor
    rl.question('Digite P para conta pessoal ou C para empresa ou B para beneficios :', (letra)=>{
      if(letra=='P'){
        rl.question("Digite o valor de deposito :", (number)=>{
          let Number:number=parseInt(number, 10)
         const peopleAccount: PeopleAccount = new PeopleAccount(2320, 'Guilherme', 33223, Number)
         peopleAccount.deposit()
         rl.question("Digite o valor para saque:",(getNumber)=>{
           peopleAccount.withdraw(getNumber)
           console.log(peopleAccount)
         rl.close();})})}
        else if(letra == 'C'){
         
          rl.question("Digite o valor de deposito :", (number)=>{
            let Number:number=parseInt(number, 10)
           const companyAccount: CompanyAccount = new CompanyAccount('ArraisLTDA',40234, Number)
           companyAccount.deposit()
           rl.question("Digite o valor para emprestimo:",(empNumber)=>{
             companyAccount.getLoan(empNumber)
             console.log(companyAccount)
           rl.close();})})


        }

        else if (letra=='B'){
          rl.question('Digite o valor de deposito de beneficios : ', (n)=>{
            let Number:number=parseInt(n, 10)
          const B:BenefitisAccount=new BenefitisAccount('Vale',223,Number)
            B.depositBenefitis()
            console.log(B)
            rl.close()
          })
        }
        
        
        
        
        })
    
      
  
  ;

/*const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
console.log(companyAccount)
*/
