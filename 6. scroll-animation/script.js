const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // 显示动画的 trigger value
    // window.innerHeight 的值是 body 的高度，如果开了开发者工具，body 的高度会随着拖动开发者工具而变大或者变小，同理宽度也是这样
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // ele.getBoundingClientRect().top 指的是元素的顶部距离 x = 0 轴的距离
        // .bottom 是底部距离 x = 0 轴的距离，这会加上元素本身的高度
        // 同理 .right 也会加上元素本身的高度
        const boxTop = box.getBoundingClientRect().top

        // 判断并添加合适的类以显示或者移除元素
        // 显示或者移除元素实际是通过 translateX 的值控制的
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
