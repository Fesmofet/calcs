var btn=["zero","one", "two","three", "four","five","six","seven","eight","nine","plus","dev","mul","min","equal","point","ac"];
// var str="";
let currents = 0;
let isNew = false;
let action = "";
let input = document.getElementById("input");

window.onload = function (e) {
    input.disabled = true;
    for(var i=0; i<10; i++){
        document.getElementById(btn[i]).addEventListener("click", getNum);
    }
    document.getElementById("point").addEventListener("click", point);
    document.getElementById("plus").addEventListener("click", operation);
    document.getElementById("min").addEventListener("click", operation);
    document.getElementById("mul").addEventListener("click", operation);
    document.getElementById("dev").addEventListener("click", operation);
    document.getElementById("equal").addEventListener("click", operation);
    document.getElementById("ac").addEventListener("click", Clear);
    // document.getElementById("btnNeg").addEventListener("click", Neg);
};
function getNum() {
    if (isNew) {
        input.value =  this.value;
        isNew = false;
        if(input.value<0){
            input.value = parseFloat(input.value) * -1;
        }
    } else {
        if (input.value === "0")
            input.value =  this.value;
        else
            input.value +=  this.value;
    }
}

function Clear() {
    currents = 0;
    action = "";
    input.value = "0";
    isNew = true;

}

function operation() {
    let currentValue = input.value;

    if (isNew && action !== "=") {
        input.value = currents;
        action = this.value;
    } else {
        isNew = true;
        if ('-' === action)
            currents -= parseFloat(currentValue);
        else if ('+' === action)
            currents += parseFloat(currentValue);
        else if ('/' === action) {
            if (parseFloat(currentValue) === 0) {
                Clear();
                alert("Деление на ноль запрещено админом!");
            } else {
                currents /= parseFloat(currentValue);
            }
        } else if ('*' === action)
            currents *= parseFloat(currentValue);
        else
            currents = parseFloat(currentValue);
        input.value = currents;
        action = this.value;
    }
}
function point() {
    let currentValue = input.value;
    if (isNew) {
        currentValue = "0.";
        isNew = false;
    } else {
        if (currentValue.indexOf(".") === -1)
            currentValue += ".";
    }
    input.value = currentValue;
}
