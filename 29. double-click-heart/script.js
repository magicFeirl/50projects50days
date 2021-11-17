let clickTime = 0;
const ele = document.querySelector("body");

function isDoubleClicked(interval = 200) {
    let click = false;
    const time = new Date().getTime();
    click = time - clickTime < interval;
    clickTime = time;

    return click;
}

ele.addEventListener("click", (e) => {
    if (!isDoubleClicked()) {
        return;
    }

    const {
        offsetTop: oy,
        offsetLeft: ox
    } = e.target;
    const {
        clientX: cx,
        clientY: cy
    } = e;

    const x = cx - ox,
        y = cy - oy;

    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.style.top = y + "px";
    heart.style.left = x + "px";

    e.target.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 500);
});
