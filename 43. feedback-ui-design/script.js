const options = document.querySelectorAll(".options span");
const send = document.querySelector(".send");
const container = document.querySelector(".container");

let status = "Neutral";

options.forEach((ele) => {
    ele.addEventListener("click", function () {
        clearAllOptionClass();
        this.classList.add("active");
        status = this.textContent;
    });
});

send.addEventListener("click", () => {
    container.innerHTML = `
      <font color="red" size="18px">♥</font>
      <h2>Thank You!</h2>
      <div class="options">
          Feedback: <strong>${status}</strong>
      </div>
      <h2 style="font-weight: normal;">
          We'll use your feedback to improve our customer support
      </h2>
  `;
});

function clearAllOptionClass() {
    options.forEach((e) => {
        e.classList.remove("active");
    });
}
