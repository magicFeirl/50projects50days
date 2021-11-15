// 获取所有图片元素
const panels = document.querySelectorAll('.panel');

// 给所有图片元素加上 click listenter
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    });
});

// 移除所有元素 active class 的工具函数
function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
