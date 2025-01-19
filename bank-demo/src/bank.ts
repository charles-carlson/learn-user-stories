import { BankType, AccountType } from './types'
/** 
 * Bank Class that holds a list of accounts and usernames tied to the Bank System.
 */
export class Bank implements BankType {

    private accounts: AccountType[] = []
    private usernames: string[] = []


    /**
     * 
     * @param accounts  a list of accounts to be stored in bank
     * @param usernames a list of bank verified usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]){
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param username  a string representing username
     * @returns true if username exists in the bank, false otherwise
     */
    private isUsernameExists(username:string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param accountNumber a number presenting the account
     * @returns an Account tied to account number or returns undefined
     */
    private findAccount(accountNumber: number): AccountType | undefined {
        return this.accounts.find(account => account.id === accountNumber);
    }

    /**
     * 
     * @param accountNumber a number representing account
     * @returns true if account number has 10 digits, false otherwise.
     */
    private isAccountNumberValid(accountNumber:number) : boolean {
        return accountNumber.toString().length === 10;
    }

    /**
     * 
     * @param username a string representing username
     * @param age number representing the age of customer
     * @param accountNumber a number representing the account number that needs to be created
     * @returns a new account of type AccountType
     */
    createAccount(username:string,age:number,accountNumber:number):AccountType {
        if(!this.isUsernameExists(username)) {
            throw new Error("User not found");
        }
        if(this.isAccountNumberValid(accountNumber)){
            throw new Error("Account number is invalid length");
        }
        if(this.findAccount(accountNumber)){
            throw new Error("Account already exists")
        }
        if(age < 18){
            throw new Error("User is under the age of 18")
        }

        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }
        console.log(`Account created for ${username} with account number ${accountNumber}`)
        this.accounts.push(newAccount);
        return newAccount;
    }

    /**
     * Deposits an amount of money into an account associated with the account number.
     * @param accountNumber number representing the age of customer
     * @param amount number representing amount of money
     */
    deposit(accountNumber: number, amount: number) {
        if(amount <= 0){
            throw Error("Amount to deposit must be greater than 0");
        }
        var acc = this.findAccount(accountNumber);
        if(acc){
            let newBalance = acc.balance + amount;
            console.log(`Account balance at ${acc.balance} updated by ${amount}, is now ${newBalance}`);
            acc.balance = newBalance;
        }
        else{
            throw Error("Account number does not exist in system.");
        }
    }

    /**
     * Checks the existing balance of an account
     * @param accountNumber the number representing the account
     */
    checkBalance(accountNumber: number){
        var acc = this.findAccount(accountNumber);
        if(acc){
            console.log(`The balance of account:${accountNumber} is ${acc.balance}`);
        }
        else{
            throw Error("Account number does not exist in system.");
        }
    }

    /**
     * Withdraws an amount of money from an account balance.
     * @param accountNumber a number representing the account
     * @param amount a number representing the amount to withdraw
     * @returns the amount withdrawn
     */
    withdraw(accountNumber: number,amount:number): number {
        if(amount <= 0){
            throw new Error("Amount to withdraw must be greater than 0")
        }
        var acc = this.findAccount(accountNumber);
        if(acc){
            if(amount > acc.balance){
                throw new Error("Amount to withdraw is greater than this account's balance")
            }
            else{
                let withdrawnBalance = acc.balance - amount;
                console.log(`Account ${acc.id} has a withdrawn ${amount} from their balance of ${acc.balance}, now updated too ${withdrawnBalance}.`);
                acc.balance = withdrawnBalance;
                return amount;
            }
        }
        else{
            throw Error("Account number does not exist in system.");
        }
    }
}


