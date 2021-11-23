const rangeEle = document.querySelector("#range");
const labelEle = document.querySelector("#range + label");
const min = +rangeEle.min,
    max = +rangeEle.max;


rangeEle.addEventListener("input", (e) => {
    slide(e.target.value);
});

function slide(range) {
    labelEle.textContent = range;
    labelEle.style.left = scale(range, min, max, 0, 100) + "%";
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
};

slide(rangeEle.value);
