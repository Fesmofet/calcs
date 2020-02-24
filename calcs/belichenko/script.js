let result = document.querySelector(".wrapper__result");
let numbersBtn = document.querySelectorAll(".numbers__button");
let operationsBtn = document.querySelectorAll(".operations__button");
let backspaceBtn = document.querySelector(".numbers__back");
let resetBtn = document.querySelector(".numbers__resert");
let arrOfOperations = [];
let resultNumber = null;
let temp = null;

numbersBtn.forEach((index) => {
    index.addEventListener('click', function(){
        if(temp !== null){
            result.innerHTML = '';
            temp = null;
        }
        if(result.innerHTML === String(0)){
            result.innerHTML = ''
        }
        result.innerHTML += index.innerHTML;
    });
});

operationsBtn.forEach((index) => {
    index.addEventListener('click', function(){
        arrOfOperations.push(index.innerHTML);
        if(arrOfOperations.length > 1) {
            total();
            arrOfOperations.shift();
        }else{
            resultNumber = parseInt(result.innerHTML);
            result.innerHTML = '';
        }
    });
});

backspaceBtn.addEventListener('click', function(){
    let temp = result.innerHTML;
    result.innerHTML = temp.substring(0, temp.length - 1)

});

resetBtn.addEventListener('click', function(){
    arrOfOperations.length = 0;
    resultNumber = null;
    result.innerHTML = '';
});

function total(){
    if(result.innerHTML !== ''){
        console.log('lox');
        switch(arrOfOperations[0]){
            case '+':
                resultNumber = resultNumber + parseInt(result.innerHTML);
                break;
            case '-':
                resultNumber = resultNumber - parseInt(result.innerHTML);
                break;
            case '*':
                resultNumber = resultNumber * parseInt(result.innerHTML);
                break;
            case '/':
                resultNumber = resultNumber / parseInt(result.innerHTML);
                break;
        }
        result.innerHTML = resultNumber;
        temp = arrOfOperations[0];
    }
    console.log("afterTotal",arrOfOperations);
}