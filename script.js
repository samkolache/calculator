let currentNum = ""
let firstNum = ""
let secondNum = ""
let operand = "";
let answer = "";
let test = 0;
const zeroButton = document.getElementById("0")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const dot = document.getElementById("dot")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiButton = document.getElementById("multi");
const diviButton = document.getElementById("divi");
const equalButton = document.getElementById("equal");
const clear = document.getElementById("clear");
const display = document.getElementById("display")

//main function
function doMath(num1, num2) {
    if(operand === "add") {
        answer = add(num1, num2);
        display.innerText = answer;
    }else if(operand === "sub") {
        answer = subtract(num1,num2);
        display.innerText = answer;
    }else if(operand === "multi") {
        answer = multiply(num1, num2)
        display.innerText = answer;
    }else if(operand === "divi") {
        answer = divide(num1, num2);
        display.innerText = answer;
    }
}



//opearnd buttons
addButton.onclick = () =>
{
    if(test === 0) {
        firstNum = currentNum * 1;
        currentNum = ""
        test = 1;
        operand = "add"
    }else {
        console.log("hello")
    }
    
}

subButton.onclick = () =>
{
    firstNum = currentNum * 1;
    currentNum = ""
    operand = "sub"
}

multiButton.onclick = () =>
{
    firstNum = currentNum * 1;
    currentNum = ""
    operand = "multi"
}

diviButton.onclick = () =>
{
    firstNum = currentNum * 1;
    currentNum = ""
    operand = "divi"
}

equalButton.onclick = () =>
{
    secondNum = currentNum * 1;
    currentNum = ""
    doMath(firstNum, secondNum);
}



//number buttons

zeroButton.addEventListener("click", event => {
    currentNum += "0"
    display.innerText = currentNum;
   
})
oneButton.addEventListener("click", event => {
    currentNum += "1" 
    display.innerText = currentNum;
   
})

twoButton.addEventListener("click", event => {
    currentNum += "2"
    display.innerText = currentNum;
})



threeButton.addEventListener("click", event => {
    currentNum += "3"
    display.innerText = currentNum;

})

dot.addEventListener("click", event => {
    currentNum += "."
    display.innerText = currentNum;

})



fourButton.addEventListener("click", event => {
    currentNum += "4"
    display.innerText = currentNum;

})

fiveButton.addEventListener("click", event => {
    currentNum += "5"
    display.innerText = currentNum;

})

sixButton.addEventListener("click", event => {
    currentNum += "6"
    display.innerText = currentNum;

})

sevenButton.addEventListener("click", event => {
    currentNum += "7"
    display.innerText = currentNum;

})

eightButton.addEventListener("click", event => {
    currentNum += "8"
    display.innerText = currentNum;

})

nineButton.addEventListener("click", event => {
    currentNum += "9"
    display.innerText = currentNum;

})

clear.addEventListener("click", event => {
    clearAll();
})











//created all math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    let ans =  num1 / num2;
    return Math.round(ans * 10) / 10
}

function multiply(num1, num2) {
    return num1 * num2
}

function negativeNumber(num) {
    return -num;
}

function clearAll() {
    currentNum = ""
    secondNum = ""
    operand = ""
    test = 0;
    display.innerHTML = 0;
}

