import { Bank } from "./bank";
import readline from "readline";
import { AccountType } from "./types";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const usernames = Array.from({length:100}, (_,i)=> String("user"+i));
const accounts : AccountType[] = []
const bank = new Bank(accounts,usernames);


const commands : {[ key : string ]: () => void } = { 
    create: ()=>{
        rl.question("Enter a username: ",(username:string)=>{
            rl.question("Enter your age: ",(age:string)=>{
                rl.question("Enter a 10 digit account number: ",(accountNumber:string)=>{
                    try{
                        bank.createAccount(username,parseInt(age,10), parseInt(accountNumber,10))
                    }catch(ex){
                        if(ex instanceof Error){
                            console.log(ex.message);
                        }
                    }
                    
                })
            })
        })
        rl.prompt()
    },
    deposit: ()=>{
        rl.question("Enter your account number: ",(accountNumber:string)=>{
            rl.question("Enter an amount to deposit: ",(amount:string)=>{
                try{
                    bank.deposit(parseInt(accountNumber,10),parseInt(amount,10))
                }catch(ex){
                    if(ex instanceof Error){
                        console.log(ex.message);
                    }
                }
            })
        })
        rl.prompt()
    },
    withdraw: ()=>{
        rl.question("Enter your account number: ",(accountNumber:string)=>{
            rl.question("Enter an amount to withdraw: ",(amount:string)=>{
                try{
                    bank.withdraw(parseInt(accountNumber,10),parseInt(amount,10))
                }catch(ex){
                    if(ex instanceof Error){
                        console.log(ex.message);
                    }
                }
            })
        })
        rl.prompt()
    },
    check: ()=>{
        rl.question("Enter your account number: ",(accountNumber:string)=>{
            try{
                bank.checkBalance(parseInt(accountNumber,10));
            }catch(ex){
                if(ex instanceof Error){
                    console.log(ex.message)    
                }
            }
        })
        rl.prompt()
    },
    quit: ()=>{
        process.exit(0);
    }
}

function main() {
    console.log("Welcome to Bank of Charles");
    console.log("Here are a list of commands.");
    console.log("create: create an account with us");
    console.log("deposit: add money to your account balance");
    console.log("withdraw: take out an amount of money from your account");
    console.log("check: check the amount in your balance currently");
    console.log("quit: quit the program.");

    rl.prompt();
    rl.on('line',(input)=>{
        const tokens = input.trim().split(/\s+/);
        const command = tokens[0];
        if(command in commands){
            commands[command]();
        }
        else{
            console.log("Command does not exist within system")
        }
        rl.prompt();
    });
}
main();