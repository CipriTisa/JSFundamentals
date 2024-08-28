//You need to instal prompt-sync module to be able to get the user inputs through the keyboard
//before runing the first time this file, past the following in your terminal: npm i prompt-sync

//clear the terminal window
console.clear();

//returns true or false, depending on whether the pattern is met in the searched string
//the regex translation: \d represents only digits from 0 to 9
const isValidStart = v => /\d/.test(v);

//prompt-sync explanation: https://www.codecademy.com/article/getting-user-input-in-node-js
let prompt = require('prompt-sync')();

let startNumber;
let endNumber;
let myArray = new Array();

//console.log('Program to show the even, odd and prime numbers from an interval of integers numbers.')

//Loop to input the start number, until it is an integer
do { startNumber = parseInt(prompt("Please enter the start number (integer) ")); }
while (isValidStart(startNumber) === false);

//Loop to input the end number until it is an integer and it is greater than the start number
do {
    endNumber <= startNumber
        ? endNumber = parseInt(prompt("End number should be greater than start number: "))
        : endNumber = parseInt(prompt("Please enter the end number (integer) "));
}
while (isValidStart(endNumber) === false || endNumber <= startNumber);
console.log(`start number = ${startNumber}\n end number = ${endNumber}`);

for (i = startNumber; i <= endNumber; i++) {
    myArray.push(i);
}

console.log(`My array = ${myArray}`);
const firstEven = myArray.find((number) => number % 2 == 0);
const negativeNumber = myArray.some((number) => number < 0);
console.log(`The first even number is: ${firstEven}`);
console.log(`Is there any negative number? - ${negativeNumber}`);

const strAr = ["Oli", "Bia", 'Ana', "Cipri"];
strAr.forEach((obj, index) => console.log(`The ${index + 1} colegue name is ${obj}`));




// //Iterate the interval to find the even, odd and prime numbers
// for (i = startNumber; i <= endNumber; i++) {
//   //searching for prime numbers
//   if (isPrime(i) == true) { primeNumbers.push(i) };
//   //if the remainder of the division by 2 is 0 then the number is even
//   if (i % 2 == 0) { evenNumbers.push(i) }
//   //else is odd
//   else { oddNumbers.push(i) }
// }

// console.log(`Even numbers in the interval: ${evenNumbers}`);
// console.log(`Odd numbers in the interval: ${oddNumbers}`);
// console.log(`Prime numbers in the interval: ${primeNumbers}`);
// const test=primeNumbers.find(m=>primeNumbers==2)
// console.log(test);

