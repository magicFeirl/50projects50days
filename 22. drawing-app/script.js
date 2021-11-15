const fontSizeEl = document.querySelector('#size')
const decreaseEl = document.querySelector('#decrease')
const increaseEl = document.querySelector('#increase')
const colorEl = document.querySelector('#color')
const clearEl = document.querySelector('#clear')
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let mousedown = false;
let color = colorEl.value;
let x, y;
let size = +fontSizeEl.innerText;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


colorEl.addEventListener('change', e => {
    color = e.target.value;
})

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

canvas.addEventListener('mousedown', (e) => {
    mousedown = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mousemove', (e) => {
    if (mousedown) {
        const {
            offsetX: x2,
            offsetY: y2
        } = e;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2, y = y2;
    }
})

canvas.addEventListener('mouseup', () => {
    mousedown = false;
    x = y = undefined;
})

canvas.addEventListener('mouseleave', () => {
    mousedown = false;
})

function updatefontSizeEleValue(size) {
    fontSizeEl.innerText = size;
}

increaseEl.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }

    updatefontSizeEleValue(size);
})

decreaseEl.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }

    updatefontSizeEleValue(size);
})
