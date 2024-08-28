console.clear();
function checkNumber (num) {
    if(num<0) { console.log(`${num}  is a negative number`)}
        else if (num==0) {console.log(`${num}  is zero`)}
         else {console.log(`${num}  is a positive number`)}
}

checkNumber(Math.floor(Math.random() * 100) + -50);

function addNumbers(num1,num2){
    console.log(`The sum of ${num1} and ${num2} is: ${num1+num2}`)
}

addNumbers(3,7);
addNumbers(10,55);
addNumbers(4,9);

const multiplyNumbers = (num1,num2)=>{
    console.log(`The product of ${num1} and ${num2} is: ${num1*num2}`)
}

multiplyNumbers(3,7);
multiplyNumbers(10,55);
multiplyNumbers(4,9);