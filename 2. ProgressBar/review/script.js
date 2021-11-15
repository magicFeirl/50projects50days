const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let currIdx = 0;

// 上一个按钮
// 增加当前活跃项目的下标，并更新样式
prev.addEventListener('click', () => {
    if (currIdx > 0) {
        currIdx--;
        update();
    }
})

// 同上一个按钮
next.addEventListener('click', () => {
    if (currIdx < circles.length - 1) {
        currIdx++;
        update();
    }
})


function update() {
    progress.style.width = currISdx / (circles.length - 1) * 100 + '%';
    circles.forEach((ele, idx) => {
        ele.classList.remove('active');
        if (idx <= currIdx) {
            ele.classList.add('active');
        }
    })
}
