let currents = 0;
let isNew = false;
let action = "";
let field = document.getElementById("editWide");

window.onload = function (e) {
    field.disabled = true;
    document.getElementById("btnOne").addEventListener("click", NumPressed);
    document.getElementById("btnTwo").addEventListener("click", NumPressed);
    document.getElementById("btnThree").addEventListener("click", NumPressed);
    document.getElementById("btnFour").addEventListener("click", NumPressed);
    document.getElementById("btnFive").addEventListener("click", NumPressed);
    document.getElementById("btnSix").addEventListener("click", NumPressed);
    document.getElementById("btnSeven").addEventListener("click", NumPressed);
    document.getElementById("btnEight").addEventListener("click", NumPressed);
    document.getElementById("btnNine").addEventListener("click", NumPressed);
    document.getElementById("btnZero").addEventListener("click", NumPressed);
    document.getElementById("btnDecimal").addEventListener("click", Decimal);
    document.getElementById("btnPlus").addEventListener("click", Operation);
    document.getElementById("btnMinus").addEventListener("click", Operation);
    document.getElementById("btnMultiply").addEventListener("click", Operation);
    document.getElementById("btnDivide").addEventListener("click", Operation);
    document.getElementById("btnWide").addEventListener("click", Operation);
    document.getElementById("btnClear").addEventListener("click", Clear);
    document.getElementById("btnNeg").addEventListener("click", Neg);
};

function NumPressed() {
    if (isNew) {
        field.value =  this.value;;
        isNew = false;
    } else {
        if (field.value === "0")
            field.value =  this.value;
        else
            field.value +=  this.value;
    }
}

function Operation() {
    let currentValue = field.value;

    if (isNew && action !== "=") {
        field.value = currents;
        action = this.value;
    } else {
        isNew = true;
        if ('+' === action)
            currents += parseFloat(currentValue);
        else if ('-' === action)
            currents -= parseFloat(currentValue);
        else if ('/' === action) {
            if (parseFloat(currentValue) === 0) {
                Clear();
                alert("You can not devide by zero");
            } else {
                currents /= parseFloat(currentValue);
            }
        } else if ('*' === action)
            currents *= parseFloat(currentValue);
        else
            currents = parseFloat(currentValue);
        field.value = currents;
        action = this.value;
    }
}

function Neg() {
    field.value = parseFloat(field.value) * -1;
}

function Decimal() {
    let currentValue = field.value;
    if (isNew) {
        currentValue = "0.";
        isNew = false;
    } else {
        if (currentValue.indexOf(".") === -1)
            currentValue += ".";
    }
    field.value = currentValue;
}

function Clear() {
    currents = 0;
    action = "";
    field.value = "0";
    isNew = true;

}