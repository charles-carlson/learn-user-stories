# learn-user-stories
User Stories Tutorial

## How To Use
    First, after cloning this repo, when inside the main directory of this project. Run
    ````
    npm install
    ````
    For installing all necessary packages. For running main program,
    navigate in your terminal to be inside the src folder then run
    ````
    npx ts-node index.ts
    ````
    You will be prompted with a menu of options. You can use valid usernames of user1 to user100 when creating new accounts with the bank system.

    Commands you can run when using program are
    ````
    create : creates an account, must provide a 10 digit number, if typing out numbers, type 11 due to constraints on how typescript checks lengths of converted numbers

    deposit : deposit an amount of money to your balance with a given account number

    withdraw : withdraw an amount of money from your balance

    check : check your current balance

    quit : leave the program
    ````
    These commands will have prompts to gather further input for the action you are choosing to run.
## Tests

To run tests, navigate to tests folder in the src folder and then type
````
npx ts-node bankTest.ts
````
It will run through all tests to meet acceptance criteria of all user stories/issues in the github projects.
