const allClear = document.getElementsByClassName('allClear');
const brackets = document.getElementsByClassName('brackets');
const percentage = document.getElementsByClassName('percentage');
const divide = document.getElementsByClassName('divide');
const numSeven = document.getElementsByClassName('numSeven');
const numEight = document.getElementsByClassName('numEight');
const numNine = document.getElementsByClassName('numNine');
const multiply = document.getElementsByClassName('multiply');
const numFour = document.getElementsByClassName('numFour');
const numFive = document.getElementsByClassName('numFive');
const numSix = document.getElementsByClassName('numSix');
const subtract = document.getElementsByClassName('subtract');
const numOne = document.getElementsByClassName('numOne');
const numTwo = document.getElementsByClassName('numTwo');
const numThree = document.getElementsByClassName('numThree');
const plus = document.getElementsByClassName('plus');
const backOne = document.getElementsByClassName('backOne');
const numZero = document.getElementsByClassName('numZero');
const decimal = document.getElementsByClassName('decimal');
const equalsTo = document.getElementsByClassName('equalsTo');
const calculationDisplay = document.getElementById('calculationDisplay');
const mathDisplay = document.getElementById('mathDisplay');

let value = 0;
let mathValue = "";

calculationDisplay.innerText = value;

function clearAll () {
    value = 0;
    mathValue = "";
    calculationDisplay.innerText = value;
    mathDisplay.innerText = mathValue;
}

allClear[0].addEventListener("click", clearAll);

function addBrackets () {
    mathValue = "(" + mathValue + ")";
    mathDisplay.innerText = mathValue;
}

brackets[0].addEventListener("click", addBrackets)

function finaliseEquation () {
    value = eval(mathValue);
    mathValue = "";
    if(value != undefined) {
    calculationDisplay.innerText = value;
    mathDisplay.innerText = mathValue;
    } else {
        value = 0;
        mathValue = ""; 
        calculationDisplay.innerText = value;
        mathDisplay.innerText = mathValue;
    }
}

equalsTo[0].addEventListener("click", finaliseEquation);



function addOne () {
    mathValue = mathValue + 1;
    mathDisplay.innerText = mathValue;
}

numOne[0].addEventListener("click", addOne);

function addTwo () {
    mathValue = mathValue + 2;
    mathDisplay.innerText = mathValue;
}

numTwo[0].addEventListener("click", addTwo);

function addThree () {
    mathValue = mathValue + 3;
    mathDisplay.innerText = mathValue;
}

numThree[0].addEventListener("click", addThree);

function addFour () {
    mathValue = mathValue + 4;
    mathDisplay.innerText = mathValue;
}

numFour[0].addEventListener("click", addFour);

function addFive () {
    mathValue = mathValue + 5;
    mathDisplay.innerText = mathValue;
}

numFive[0].addEventListener("click", addFive);

function addSix () {
    mathValue = mathValue + 6;
    mathDisplay.innerText = mathValue;
}

numSix[0].addEventListener("click", addSix);

function addSeven () {
    mathValue = mathValue + 7;
    mathDisplay.innerText = mathValue;
}

numSeven[0].addEventListener("click", addSeven);

function addEight () {
    mathValue = mathValue + 8;
    mathDisplay.innerText = mathValue;
}

numEight[0].addEventListener("click", addEight);

function addNine () {
    mathValue = mathValue + 9;
    mathDisplay.innerText = mathValue;
}

numNine[0].addEventListener("click", addNine);

function addZero () {
    mathValue = mathValue + 0;
    mathDisplay.innerText = mathValue;
}

numZero[0].addEventListener("click", addZero);

function addPlus () {
    mathValue = mathValue + " + ";
    mathDisplay.innerText = mathValue;
}

plus[0].addEventListener("click", addPlus);

function addMinus () {
    mathValue = mathValue + " - ";
    mathDisplay.innerText = mathValue;
}

subtract[0].addEventListener("click", addMinus);

function addMultiply () {
    mathValue = mathValue + " * ";
    mathDisplay.innerText = mathValue;
}

multiply[0].addEventListener("click", addMultiply); 

function addDecimalPoint () {
    mathValue = mathValue + ".";
    mathDisplay.innerText = mathValue
}

decimal[0].addEventListener("click", addDecimalPoint);

function addDivideBy () {
    mathValue = mathValue + " / ";
    mathDisplay.innerText = mathValue;
}

divide[0].addEventListener("click", addDivideBy);

function addPercentage () {
    let newValue = 0;
    if(mathValue === "") {
        return
    } else {
        newValue = eval(mathValue) / 100;
        mathValue = newValue;
        mathDisplay.innerText = mathValue;
    }
}

percentage[0].addEventListener("click", addPercentage);

function sliceLastValue () {
    mathValue = mathValue.slice(0,-1);
    mathDisplay.innerText = mathValue;
}

backOne[0].addEventListener("click", sliceLastValue);