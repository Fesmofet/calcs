window.addEventListener("load", () => {
    let socket = io.connect("https://stormy-refuge-28123.herokuapp.com/");

    let inputColor = document.querySelector("#color");
    let lineWidth = document.querySelector("#lineWidth");
    let obj = {
        color: "black",
        lineWidth: 10,
        moveTo: [],
    };
    let allArr = [];
    let paint = document.querySelector("#canvas1");
    let ctx = paint.getContext("2d");
    let clear = document.getElementById("clear");
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    let draw = false;
    let massage = document.getElementById("massage"),
        handle = document.getElementById("handle"),
        btn = document.getElementById("send"),
        output = document.getElementById("output");


    clear.addEventListener("click", () => {
        ctx.clearRect(0, 0, paint.width, paint.height);
        allArr = [];
    });

    inputColor.addEventListener("change", (e) => {
        ctx.strokeStyle = e.target.value;
    });

    lineWidth.addEventListener("change", (e) => {
        ctx.lineWidth = e.target.value;
    });

    paint.addEventListener("mousedown", (e) => {
        draw = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        obj = {
            moveTo: [e.offsetX, e.offsetY],
            lineTo: [],
        };
    });

    paint.addEventListener("touchstart", (e) => {
        draw = true;
        let r = paint.getBoundingClientRect();
        let currX = e.touches[0].clientX - r.left;
        let currY = e.touches[0].clientY - r.top;
        ctx.beginPath();
        ctx.moveTo(currX, currY);
        obj = {
            moveTo: [e.touches[0].clientX, e.touches[0].clientY],
            lineTo: [],
        };
    });

    paint.addEventListener("mousemove", (e) => {
        if (!draw) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        obj.color = ctx.strokeStyle;
        obj.lineWidth = ctx.lineWidth;
        obj.lineTo.push(e.offsetX, e.offsetY);
    });

    paint.addEventListener("touchmove", (e) => {
        if (!draw) return;
        let r = paint.getBoundingClientRect();
        let currX = e.touches[0].clientX - r.left;
        let currY = e.touches[0].clientY - r.top;
        ctx.lineTo(currX, currY);
        ctx.stroke();
        obj.color = ctx.strokeStyle;
        obj.lineWidth = ctx.lineWidth;
        obj.lineTo.push(currX, currY);
    });

    paint.addEventListener('mouseup', (e) => {
        draw = false;
        allArr.push(obj);
        socket.emit("line",
            JSON.stringify(allArr)
        )
    });

    paint.addEventListener('touchend', (e) => {
        draw = false;
        allArr.push(obj);
        socket.emit("line",
            JSON.stringify(allArr)
        )
    });

    paint.addEventListener('mouseout', () => draw = false);

    paint.addEventListener('touchcancel', () => draw = false);

    // btn.addEventListener("click", function () {
    //     socket.emit("chat", {
    //         massage: massage.value,
    //         handle: handle.value
    //     })
    // });
    //
    // socket.on('chat', (data) => {
    //     output.innerHTML += `<p style = "color:${getRandomColor()}">` + data.handle + " :" + data.massage + "</p>"
    // });

    socket.on('line', (data) => {
        let lineObj = JSON.parse(JSON.parse(data));
        drawLine(lineObj)
    });

    drawLine = (obj) => {
        for (let i = 0; i < obj.length; i++) {
            ctx.beginPath();
            ctx.moveTo(obj[i].moveTo[i], obj[i].moveTo[i + 1]);
            ctx.strokeStyle = obj[i].color;
            ctx.lineWidth = obj[i].lineWidth;
            let lineArr = obj[i].lineTo;
            if (lineArr === undefined) return;
            for (let j = 0; j < lineArr.length; j = j + 2) {
                if (lineArr[j + 1] === undefined) {
                    return;
                } else {
                    ctx.lineTo(lineArr[j], lineArr[j + 1]);
                    ctx.stroke()
                }
            }
        }
    };

    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});





