//button creations
let display = document.getElementById("display");

const sevenButton = document.getElementById("7");
const fourButton = document.getElementById("4");
const oneButton = document.getElementById("1");
const clear = document.getElementById("clear");
const eightButton = document.getElementById("8");
const fiveButton = document.getElementById("5");
const twoButton = document.getElementById("2");
const zeroButton = document.getElementById("0");
const nineButton = document.getElementById("9");
const sixButton = document.getElementById("6");
const threeButton = document.getElementById("3");
const dot = document.getElementById("dot");

const plusOrMinus = document.getElementById("val");
const multiButton = document.getElementById("multi");
const subButton = document.getElementById("sub");
const addButton = document.getElementById("add");
const remove = document.getElementById("delete");
const diviButton = document.getElementById("divi");
const equalButton = document.getElementById("equal");

//variable declarations
let currentNum = "";
let firstNum = "";
let secondNum = "";
let adjValue = "";
let newSum = ""
let runningTotal = 0;
let count = 0;
let operand = "";

//main function
function operate(oper, num1, num2) {
    if(oper === "add") {
        newSum = add(num1, num2)
        runningTotal = newSum;
        display.innerText = runningTotal;
        count++
        operand = ""
    }else if(oper === "sub") {
        newSum = subtract(num1, num2);
        runningTotal = newSum;
        display.innerText = runningTotal;
        count++
        operand = ""
    }else if(oper === "multi") {
        newSum = multiply(num1, num2);
        runningTotal = newSum;
        display.innerText = runningTotal;
        count++
        operand = ""
    }else if(oper === "divi") {
        newSum = divide(num1, num2);
        runningTotal = newSum;
        display.innerText = runningTotal;
        count++
        operand = ""
    }
}

//function buttons
addButton.addEventListener("click", event => {
    if(count === 0) {
        firstNum = currentNum * 1;
        currentNum = "";
        count++;
    }else if(count === 1) {
        
        if(operand === "sub") {
            adjValue = currentNum * 1;
            runningTotal -= subtract(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "multi") {
            adjValue = currentNum * 1;
            runningTotal += multiply(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "divi") {
            adjValue = currentNum * 1;
            runningTotal += divide(firstNum, adjValue);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand !== "sub") {
            adjValue = currentNum * 1;
            runningTotal += add(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }
        
        
        
    }else if(count > 1) {
        if(operand === "sub") {
            adjValue = currentNum * 1
            runningTotal = runningTotal - adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "multi") {
            adjValue = currentNum * 1
            runningTotal = runningTotal * adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "divi") {
            adjValue = currentNum * 1
            runningTotal = divide(runningTotal,adjValue);
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand !== "sub") {
            adjValue = currentNum * 1;
            runningTotal += adjValue;
            display.innerText = runningTotal;
             currentNum = "";
             adjValue = "";
             count++
        }
        
       
    }
    operand = "add";
})

multiButton.addEventListener("click", event => {
    if(count === 0) {
        firstNum = currentNum * 1;
        currentNum = "";
        count++
        console.log(count)
    }else if(count === 1) {
        if(operand === "add") {
            adjValue = currentNum * 1;
            runningTotal += add(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "sub") {
            adjValue = currentNum * 1;
            runningTotal -= subtract(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
            console.log("hello")
        }else if(operand === "divi") {
            adjValue = currentNum * 1;
            runningTotal += divide(firstNum, adjValue);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal = multiply(firstNum, adjValue)
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }
        
       
    }else if(count > 1) {
        if(operand === "add") {
            adjValue = currentNum * 1
            runningTotal = runningTotal + adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "sub") {
            adjValue = currentNum * 1
            runningTotal = runningTotal - adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "divi") {
            adjValue = currentNum * 1
            runningTotal = divide(runningTotal, adjValue);
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal *= adjValue;
            display.innerText = runningTotal;
            currentNum = "";
            adjValue = "";
            count++
        }
        
    }
    operand = "multi";
})

diviButton.addEventListener("click", event => {
    if(count === 0) {
        firstNum = currentNum * 1;
        currentNum = "";
        count++
    }else if(count === 1) {
        if(operand === "add") {
            adjValue = currentNum * 1;
            runningTotal += add(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "sub") {
            adjValue = currentNum * 1;
            runningTotal += subtract(firstNum, adjValue);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "multi") {
            adjValue = currentNum * 1;
            runningTotal += multiply(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal = divide(firstNum, adjValue)
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }
        

    }else if(count > 1) {
        if(operand === "add") {
            adjValue = currentNum * 1
            runningTotal = runningTotal + adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "sub") {
            adjValue = currentNum * 1
            runningTotal = runningTotal - adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "multi") {
            adjValue = currentNum * 1
            runningTotal = runningTotal * adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        } else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal /= adjValue;
            display.innerText = runningTotal;
            currentNum = "";
            adjValue = "";
            count++
        }
       
    }
    operand = "divi"
})

subButton.addEventListener("click", event => {
    if(count === 0) {
        firstNum = currentNum * 1;
        currentNum = "";
        count++
    }else if(count === 1) {
        if(operand === "add") {
            adjValue = currentNum * 1;
            runningTotal += add(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand === "multi") {
            adjValue = currentNum * 1;
            runningTotal += multiply(adjValue, firstNum);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand = "divi") {
            adjValue = currentNum * 1;
            runningTotal += divide(firstNum, adjValue);
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal = subtract(firstNum, adjValue)
            display.innerText = runningTotal;
            adjValue = "";
            currentNum = ""
            firstNum = ""
            count++;
        }
        
        
        
    }else if(count > 1) {
        if(operand === "add") {
            adjValue = currentNum * 1
            runningTotal = runningTotal + adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "multi") {
            adjValue = currentNum * 1
            runningTotal = runningTotal * adjValue;
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand === "divi") {
            adjValue = currentNum * 1
            runningTotal = divide(runningTotal, adjValue);
            adjValue = "";
            currentNum = "";
            operand = "";
            count++
            display.innerText = runningTotal;
        }else if(operand !== "add") {
            adjValue = currentNum *1
            runningTotal -= adjValue;
            display.innerText = runningTotal;
            currentNum = "";
            adjValue = "";
            count++
        } 
        
        
    }
    operand = "sub"
})
    

equalButton.addEventListener("click", event => {
    if(count === 1) {
        secondNum = currentNum * 1
        currentNum = ""
        operate(operand, firstNum, secondNum);
    }else if(count > 1) {
        secondNum = currentNum * 1
        currentNum = ""
        operate(operand, runningTotal, secondNum)
    }
    
})



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


//created all math and other
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    let ans =  num1 * num2;
    return Math.round(ans * 10) / 10
}

function divide(num1, num2) {
    let ans =  num1 / num2;
    return Math.round(ans * 10) / 10
}

function clearAll() {
     currentNum = "";
     firstNum = "";
     secondNum = "";
     runningTotal = 0;
     count = 0;
    operand = "";
    display.innerText = 0;
}

function backSpace() {

}