const container = document.querySelector('#container');
const square = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

init();

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function init() {
    for (let i = 0; i < square; i++) {
        const squareEle = document.createElement('div');
        squareEle.classList.add('square');
        container.appendChild(squareEle);

        squareEle.addEventListener('mouseover', function () {
            this.style.backgroundColor = getRandomColor();
        })

        squareEle.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#1d1d1d';
        })
    }
}
