const options = document.querySelectorAll('.option');

options.forEach((ele) => {
    ele.addEventListener('click', () => {
        ele.parentNode.parentNode.classList.toggle('active');
    })
})
