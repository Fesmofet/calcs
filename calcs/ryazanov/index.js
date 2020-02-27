let display = document.getElementById("display");
let clear =  document.getElementById("clear");
let equals =  document.getElementById("equals");
let arrgСonditions = ["division","plus", "minus", "multiplication"];
let result = 0;
let currentCount = 1;
let counter = 1;
let res, condition;
let arrNumber = [];
let correntInput = 1;
addButton();
conditionInitialization();

function addButton() {
    for (let i = 0; i <= 10; i++) {
        (function creatureBtn() {
            let btn = document.getElementById(`${i}`);
            btn.addEventListener("click", () => writeInput(btn));
        })();
    }
}

function conditionInitialization() {
    for (let i = 0; i < arrgСonditions.length; i++) {
        (function creatureBtn() {
            let btnСonditions = document.getElementById(`${arrgСonditions[i]}`);
            btnСonditions.addEventListener("click", () => claerAddCondition(btnСonditions));
        })();
}
}

function writeInput(btn) {
    if (display.value.length < 16) {
        if (currentCount === 1) {
            if (arrNumber.length === 0) {
                if (btn.value === "." || display.value !== "0") {
                    display.value += btn.value;
                } else {
                    display.value = btn.value;
                }
            } else {
                display.value += btn.value;
            }
        } else {
            correntInput++;
            if (btn.value !== "." && counter === 1) {
                display.value = "";
            }
            counter++;
            if (btn.value !== "." && display.value !== "0") {
                display.value += btn.value;
            } else if (btn.value === "." && display.value !== "0") {
                display.value = 0;
                display.value += btn.value;
            } else {
                display.value = btn.value;
            }
        }
   }
}

function claerAddCondition(btnСonditions) {
        if (currentCount === 1) {
            result = Number(display.value);
            arrNumber.push(result);
            arrNumber.push(btnСonditions.value);
            currentCount++;
        } else {
            if (correntInput === 1) {
                arrNumber[1] = btnСonditions.value;
            } else {
                arrNumber.push(Number(display.value));
                condition = btnСonditions.value;
                display.value = addCondition();
                correntInput = 1;
            }
        }
}

function addCondition() {
    res = 0;
    if (arrNumber.length !== 3) {
        return display.value;
    }
        if (arrNumber[1] === "+") {
            res = arrNumber[0] + arrNumber[2];
        } else if (arrNumber[1] === "-") {
            res = arrNumber[0] - arrNumber[2];
        } else if (arrNumber[1] === "*") {
            res = arrNumber[0] * arrNumber[2];
        } else if (arrNumber[1] === "/") {
            if (arrNumber[2] === 0) {
              return res = "На ноль делить нельзя";
            }
            res = arrNumber[0] / arrNumber[2];
        }
    arrNumber = [];
    arrNumber.push(res);
    arrNumber.push(condition);
    counter = 1;
return res;
}

function reset() {
    arrNumber = [];
    result = 0;
    currentCount = 1;
    counter = 1;
    display.value = "0";
    correntInput = 1;

}

function happyEnd() {
    if (correntInput === 1) {
        display.value = arrNumber[0];
    } else {
        arrNumber.push(Number(display.value));
        display.value = addCondition();
        arrNumber = [];
        currentCount = 1;
        counter = 1;
        correntInput = 1;
    }
}
clear.addEventListener("click", reset);
equals.addEventListener("click", happyEnd);
