import {Bank} from '../src/bank';

//setup

const accounts = [{id:1234567890,balance: 3448},
    {id:1234567891,balance:2464}
];

const usernames = ['user1','user2'];
const bank = new Bank(accounts, usernames);
//Scenario 1: customer is able to create a new bank account

try{
    const acc1 = bank.createAccount("user1",23,1234567892);
    console.log("Scenario 1 failed")
}catch(ex){
    console.log("Scenario 1 passed")
}

//Scenario 2 customer is unable to create a new bank account due to invalid age
try{
    const acc2 = bank.createAccount("user1",17,1234567892);
    console.log("Scenario 2 failed")
}catch(ex){
    console.log("Scenario 2 passed")
}

//Scenario 3 customer is unable to create a new bank account due to invalid username
try{
    const acc3 = bank.createAccount("user3",23,1234567893)
    console.log("Scenario 3 failed")
}catch(ex){
    console.log("Scenario 3 passed")
}

