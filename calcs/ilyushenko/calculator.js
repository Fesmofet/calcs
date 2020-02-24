
function insertNumber(input, btn){
input.value = input.value + btn;
    console.log(input.value)
}

function numberButtonInitialization(input){
    for (var i = 0; i < 10; i++){
        (function(){
            var btn = document.getElementById(`${i}`);
            btn.addEventListener("click", () =>  insertNumber(input, btn.value));
            console.log(btn)
        })();
    }
    console.log(numberButtonInitialization)

}

function equally(){
    console.log(equally)
switch(operation){
    case "+":
        input.value = result + Number(input.value);
        result = 0;
        operation = "";
        break;
    case "-":
        input.value = result - Number(input.value);
        result = 0;
        operation = "";
        break;
    case "x":
        input.value = result * Number(input.value);
        result = 0;
        operation = "";
        break;
    case "/":
        input.value = result / Number(input.value);
        result = 0;
        operation = "";
        break;
        default:
            break;
    }
}

function plus(){
    result =Number(input.value);
    operation = "+";
    input.value = "";
}

function minus(){
    result = Number(input.value);
    operation = "-";
    input.value = "";
}

function multiplication(){
    result = Number(input.value);
    operation = "x";
    input.value = "";
}

function division(){
    result = Number(input.value);
    operation = "/";
    input.value = "";
}

function reset(){
     result = null;
     operation = "";
     input.value = "";
 }
 function clear() {
    var clearSplit = input.value.split("");
         clearSplit.pop();

          input.value = clearSplit.join('');
     }
  function coma(){
if (input.value === "") {
input.value += "0."
} else {
input.value += "."
}
  }

function displayValue(input, value) {
    if (input.value.length === 0 && value === ".") {
        input.value = "0.";
        return;
    } else if (operation) {
        clear();
        input.value = value;
        operation = false;
        return;
    } else if (input.value.length > 25) {
        return;
    } else if (input.value.length === 0 && value === ".") {
        input.value = "0.";
        return;
    } else if (value === "." && input.value.includes(".") || value === "0" && input.value[0] === "0") {
        if (value === "0" && input.value[0] === "0" && input.value.includes(".")) {
            input.value += value;
            return;
        } else {
            return
        }
    }
}