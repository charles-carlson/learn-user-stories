import {Bank} from '../src/bank';

//setup

const accounts = [{id:1234567890,balance: 3448},
    {id:1234567891,balance:2464},
    {id:12345678989,balance:2000}
];

const usernames = ['user1','user2'];
const bank = new Bank(accounts, usernames);

//Bank System Issue
//Scenario 1: customer is able to create a new bank account
try{
    const acc = bank.createAccount("user2",25,12345678934)
    console.log("Bank-Scenario 1a passed");
}catch(ex){
    console.log("Bank- Scenario 1a failed");
}

try{
    const acc1 = bank.createAccount("user1",23,1234567892);
    console.log("Bank- Scenario 1b failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Account number is invalid length"){
            console.log("Bank-Scenario 1b passed");
        }
        else{
            console.log("Bank- Scenario 1b failed");
        }
    }
}

//Scenario 2 customer is unable to create a new bank account due to invalid age
try{
    const acc2 = bank.createAccount("user1",17,12345678923);
    console.log("Bank-Scenario 2 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "User is under the age of 18"){
            console.log("Bank-Scenario 2 passed");
        }
        else{
            console.log("Bank-Scenario 2 failed");
        }
    }
}

//Scenario 3 customer is unable to create a new bank account due to invalid username
try{
    const acc3 = bank.createAccount("user3",23,1234567893);
    console.log("Bank-Scenario 3 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "User not found"){
            console.log("Bank-Scenario 3 passed");
        }
        else{
            console.log("Bank-Scenario 3 failed");
        }
    }
}
//Scenario 4: a customer us unable to create a new bank account due to account number already existing
try{
    const acc4 = bank.createAccount("user1",25,12345678989);
    console.log("Bank-Scenario 4 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Account already exists"){
            console.log("Bank-Scenario 4 passed");
        }
        else{
            console.log("Bank-Scenario 4 failed");
        }
    }
}
//Deposit Issue
//Scenario 1: a customer can successfully deposit money into their account balance
try{
    bank.deposit(1234567890,125)
    console.log("Deposit-Scenario 1 passed");
}catch(ex){
    console.log("Deposit-Scenario 1 failed");
}

//Scenario 2: a customer cannot deposit a negative amount of money into their account
try{
    bank.deposit(1234567890,-125)
    console.log("Deposit-Scenario 2a failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Amount to deposit must be greater than 0"){
            console.log("Deposit-Scenario 2a passed");
        }
        else{
            console.log("Deposit-Scenario 2a failed");
        }
    }
}
try{
    bank.deposit(1234567890,0)
    console.log("Deposit-Scenario 2b failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Amount to deposit must be greater than 0"){
            console.log("Deposit-Scenario 2b passed");
        }
        else{
            console.log("Deposit-Scenario 2b failed");
        }
    }
}

//Scenario 3:  a customer cannot deposit money into an account that does not exist
try{
    bank.deposit(1234567896,125)
    console.log("Deposit-Scenario 3 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Account number does not exist in system."){
            console.log("Deposit-Scenario 3 passed");
        }
        else{
            console.log("Deposit-Scenario 3 failed");
        }
    }
}

//Issue-Check Balance
//Scenario 1: a customer can check their balance of their account
try{
    bank.checkBalance(1234567890);
    console.log("Check Balance-Scenario 1 passed");
}catch(ex){
    console.log("Check Balance-Scenario 1 failed");
}
//Scenario 2: a customer cannot check the balance of an account that does not exist
try{
    bank.checkBalance(1234567897);
    console.log("Check Balance-Scenario 2 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Account number does not exist in system."){
            console.log("Check Balance-Scenario 2 passed");
        }
        else{
            console.log("Check Balance-Scenario 2 failed");
        }
    } 
}

//Withdraw Issue
//Scenario 1: a customer should be able to successfully withdraw money from their account
try{
    const withdrawn = bank.withdraw(1234567890,500);
    if(withdrawn == 500){
        console.log("Withdraw-Scenario 1 passed")
    }
    else{
        console.log("Withdraw-Scenario 1 failed")
    }
}catch(ex){
    console.log("Withdraw-Scenario 1 failed")
}
//Scenario 2: a customer should not be able to withdraw money from an account that does not exist
try{
    const withdrawn = bank.withdraw(1234567898,100);
    console.log("Withdraw-Scenario 2 failed");
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Account number does not exist in system."){
            console.log("Withdraw-Scenario 2 passed");
        }
        else{
            console.log("Withdraw-Scenario 2 failed");
        }
    }
}
//Scenario 3: a customer should not be able to withdraw more than their account balance
try{
    const withdrawn = bank.withdraw(1234567890,5000);
    console.log("Withdraw-Scenario 2 failed")
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Amount to withdraw is greater than this account's balance"){
            console.log("Withdraw-Scenario 3 passed")
        }
        else{
            console.log("Withdraw-Scenario 3 failed")
        }
    }
}
//Scenario 4: a customer cannot withdraw a negative or zero amount from their account balance
try{
    const withdrawn = bank.withdraw(1234567890,0);
    console.log("Withdraw-Scenario 3a failed")
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Amount to withdraw must be greater than 0"){
            console.log("Withdraw-Scenario 4a passed")
        }
        else{
            console.log("Withdraw-Scenario 4a failed")
        }
    }    
}

try{
    const withdrawn = bank.withdraw(1234567890,-120);
    console.log("Withdraw-Scenario 3b failed")
}catch(ex){
    if(ex instanceof Error){
        if(ex.message === "Amount to withdraw must be greater than 0"){
            console.log("Withdraw-Scenario 4b passed")
        }
        else{
            console.log("Withdraw-Scenario 4b failed") 
        }
    }
}
