// Armstrong Number
// Method : Looping Statements & Conditional statements

const Num = prompt("Enter the Number:");
const NumOfDigits = Num.length;
let sum = 0;

let temp = Num;
 while(temp > 0)
 {
    let Remain = temp % 10;
    sum += Remain ** NumOfDigits;
    temp = parseInt(temp / 10);
 }

 if(sum == Num)
 {
    console.log(`${Num} is an Armstrong Number.`);
 }
 else
 {
    console.log(`${Num} is not an Armstrong Number.`);
 }