#! /usr/bin/env/ node
import inquirer from "inquirer";
let myBalance = 10000;
let myCode = 1234;
let myPin = await inquirer.prompt([{
        name: 'pincode',
        type: 'number',
        message: 'Enter your pin please'
    }]);
if (myPin.pincode === myCode) {
    console.log('Correct pin');
    let showOptions = await inquirer.prompt([{
            name: 'options',
            type: 'list',
            message: 'Select one of them',
            choices: ['Withdraw', 'Check balance', 'Fast cash'],
        }]);
    if (showOptions.options === 'Withdraw') {
        let showAmout = await inquirer.prompt([{
                name: 'amount',
                type: 'number',
                message: 'Enter your amount here'
            }]);
        if (showAmout.amount <= myBalance) {
            let withdrawRemain = myBalance - showAmout.amount;
            console.log(`Withdraw succesfully ${showAmout.amount}, Now your balance is ${withdrawRemain}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (showOptions.options === 'Check balance') {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (showOptions.options === 'Fast cash') {
        let showCash = await inquirer.prompt([{
                name: 'cashoptions',
                type: 'list',
                message: 'Select your amount',
                choices: ['500', '1000', '2000', '3000', '4000', '5000']
            }]);
        if (showCash.cashoptions > myBalance) {
            console.log('Insufficient Blance');
        }
        else {
            let fastcashWithdraw = myBalance - showCash.cashoptions;
            console.log(`Withdraw successfully ${showCash.cashoptions}`);
            console.log(`Your Remaining Balance is ${fastcashWithdraw}`);
        }
    }
}
else {
    console.log('Incorrect pin try again later');
}
