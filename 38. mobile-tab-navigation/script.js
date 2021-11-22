const tabs = document.querySelectorAll('nav ul li');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', function () {
        clearAllActiveClass();
        this.classList.add('active');
        contents[idx].classList.add('show');
    })
})


function clearAllActiveClass() {
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })

    contents.forEach(content => {
        content.classList.remove('show')
    });
}
