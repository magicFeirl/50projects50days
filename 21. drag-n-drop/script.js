const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging')
}


empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    // 不加这句元素不会移动到目标位置
    this.append(fill)
}
