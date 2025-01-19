export type AccountType = {
    id: number,
    balance: number
}

export interface BankType {
    createAccount(username:string, age:number, accountNumber:number) : AccountType
    deposit(accountNumber:number,amount:number)
    checkBalance(accountNumber:number)
    withdraw(accountNumber:number, amount:number) : number
}
