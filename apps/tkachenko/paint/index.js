/*Paint style app using HTML5 Canvas and plain Javascript*/

//Build canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const p = document.querySelector('.picture-frame');

//Set canvas dimensions and drawing styles
canvas.width = 540;
canvas.height = 260;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 10;

//Element Selectors
const colorInput = document.querySelector(".color");
const widthInput = document.querySelector(".line-width");
const bgInput = document.querySelector(".bg");
const clearInput = document.querySelector(".clear");

//Functions to update style from user input
function colorUpdate(){
    ctx.strokeStyle = this.value;
}

function widthUpdate(){
    ctx.lineWidth = this.value;
}

function background(){
    console.log(canvas);
    canvas.style.background = this.value;
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.background = "#FFFFFF";
    bgInput.value = "#FFFFFF";
}

//User Input event listeners
colorInput.addEventListener('change', colorUpdate);
widthInput.addEventListener('change', widthUpdate);
bgInput.addEventListener('change', background);
clearInput.addEventListener('click', clearCanvas);

// draw function to draw on mousedown
let prevX = 0;
let prevY = 0;
let drawing = false;

function draw(e){
    if(!drawing){
        return;
    }
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    prevX = e.offsetX;
    prevY = e.offsetY;
}

//User drawing event listners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', function(){drawing = false;});
canvas.addEventListener('mouseup', function(){drawing = false;});
canvas.addEventListener('mousedown', function(e){
    drawing = true;
    prevX = e.offsetX;
    prevY = e.offsetY;
});

