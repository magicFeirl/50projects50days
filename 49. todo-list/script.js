const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".input");

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <input type="checkbox" />
            <label>${e.target.value}</label>
            <span class="delete">X</span>
          `;

        todoItem.addEventListener("click", function () {
            const checkbox = this.querySelector("input");
            checkbox.checked = !checkbox.checked;
        });

        todoItem.querySelector(".delete").addEventListener("click", (e) => {
            e.preventDefault();
            todoItem.remove();
        });

        todoList.appendChild(todoItem);

        e.target.value = "";
    }
});
