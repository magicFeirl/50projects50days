const addNoteEle = document.querySelector("#add-note");
const mainEle = document.querySelector("#main");

addNoteEle.addEventListener("click", () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
            <header>
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </header>
            <textarea cols="30" rows="10"></textarea>
      `;

    // 用创建出来的元素选择 innerHTML 的内容
    const editEle = note.querySelector(".edit");
    const deleteEle = note.querySelector(".delete");
    const noteContentEle = note.querySelector("textarea");

    deleteEle.addEventListener("click", () => {
        note.remove();
    });

    mainEle.appendChild(note);
});
