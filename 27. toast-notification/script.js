const btnEle = document.querySelector("button");
const toastContainerEle = document.querySelector(".toast-container");

btnEle.addEventListener("click", () => {
    showNotification("hello world", 3000);
});

function showNotification(text, duration, type = "success") {
    const toast = document.createElement("div");
    toast.innerText = text;
    toast.classList.add("toast", type);
    toast.style.setProperty("--duration", duration + "ms");
    toastContainerEle.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, duration - 50);
}
