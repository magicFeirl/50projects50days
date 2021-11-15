const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const {
            clientX,
            clientY
        } = e;

        const y = e.target.offsetTop;
        const x = e.target.offsetLeft;

        const insertX = clientX - x,
            insertY = clientY - y;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = insertY + 'px';
        circle.style.left = insertX + 'px';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 5000);
    })
})
