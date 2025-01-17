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
            throw new Error("Account already exists");
        }
        if(age < 18){
            throw new Error("User is under the age of 18")
        }

        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }
        this.accounts.push(newAccount);
        return newAccount;
    }
}


