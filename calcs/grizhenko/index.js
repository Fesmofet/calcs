let display = document.getElementById("display"); // Calculator screen where result is displayed
let arrNumber = [];
let clear =  document.getElementById("clear");
let equals =  document.getElementById("equals");
let arrgСonditions = ["plus", "minus", "multiplication", "division"];
let result = 0;
let currentCount = 1;
let counter = 1;
let res;
let condition;
let correntInput = 1;
let currentZero = 1;
buttonInitialization();
conditionInitialization();

function buttonInitialization() {
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


        if (currentCount === 1) {
            if (currentZero !== 1) {
                reset();
                currentZero = 1;
            }
            if (display.value.length < 16) {
            if (arrNumber.length === 0) {
                if (btn.value === "." || display.value !== "0") {
                    if (btn.value === "." && display.value.includes(".")) {
                        return;
                    }
                    display.value += btn.value;
                } else {
                    display.value = btn.value;
                }
            } else {
                display.value += btn.value;
            }
          }
        } else {
            correntInput++;
            if (btn.value !== "." && counter === 1) {
                display.value = "";
            }
            counter++;
            if (display.value.length < 16) {
                if (btn.value === "." && display.value !== "0" || btn.value === "." && display.value !== 0) {
                    if (btn.value === "." && display.value.includes(".")) {
                        return;
                    }
                    if (correntInput === 2) {
                        display.value = 0;
                    }
                    display.value += btn.value;
                } else {
                    display.value += btn.value;
                }
            }
        }

}

function claerAddCondition(btnСonditions) {
        if (currentCount === 1) {
            if (res === "На ноль делить нельзя") {
                return;

            }
            if (display.value === "0" && btnСonditions.value === "-") {
                display.value = "-";
                return;
            }
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
        return;
    } else {
        if (arrNumber[1] === "+") {
            res = arrNumber[0] + arrNumber[2];
        } else if (arrNumber[1] === "-") {
            res = arrNumber[0] - arrNumber[2];
        } else if (arrNumber[1] === "*") {
            res = arrNumber[0] * arrNumber[2];
        } else if (arrNumber[1] === "/") {
            if (arrNumber[2] === 0) {
                currentZero++;
                currentCount = 1;
                return res = "На ноль делить нельзя";
            }
            res = arrNumber[0] / arrNumber[2];
        }
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
        return;
    } else {
        arrNumber.push(Number(display.value));
        console.log(arrNumber);
        display.value = addCondition();
        arrNumber = [];
        currentCount = 1;
        counter = 1;
        correntInput = 1;
        res = 0;
    }
}
clear.addEventListener("click", reset);
equals.addEventListener("click", happyEnd);
// if (btn.value !== "." && display.value !== "0") {
//     display.value += btn.value;
// } else