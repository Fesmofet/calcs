function validate(evt) {
  var theEvent = evt || window.event;
  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function sin(){
  document.calculator.result.value = Math.sin(document.calculator.result.value);
}

function cos(){
  document.calculator.result.value = Math.cos(document.calculator.result.value);
}

function BACKSPC(){
  var a = document.calculator.result.value;
  document.calculator.result.value = a.substr(0, a.length-1);
}

function tan(){
  document.calculator.result.value = Math.tan(document.calculator.result.value);
}

function qubbed() {
  document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
}

function square() {
  document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}

function sqrt2() {
  document.calculator.result.value = Math.pow(document.calculator.result.value, 1/2);
}

function sqrt3() {
  document.calculator.result.value = Math.pow(document.calculator.result.value, 1/3);
}

function number(value) {
  if(document.calculator.result.value.length <= 10) {
    document.calculator.result.value += value;
  } else {
    document.calculator.result.value = "Error      ";
  }
}

function remove() {
  document.calculator.result.value = " ";
}

function equal() {
  document.calculator.result.value = eval(document.calculator.result.value);
}