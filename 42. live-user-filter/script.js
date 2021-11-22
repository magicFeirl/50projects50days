const userList = document.querySelector(".user-list");
const listItems = [];

getUsers();

async function getUsers() {
  const response = await fetch("https://randomuser.me/api?results=50");
  const { results: users } = await response.json();

  users.forEach((user) => {
    const userEle = document.createElement("li");
    userEle.classList.add("user");
    userEle.innerHTML = `
      <img src="${user.picture.medium}" alt="" />
      <div class="profile">
          <p class="name">${user.name.first + user.name.last}</p>
          <p class="location"><p>${user.location.city}, ${
      user.location.country
    }</p></p>
      </div>
    `;

    userList.appendChild(userEle);
    listItems.push(userEle);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

document.querySelector("#search").addEventListener("input", (e) => {
  filterData(e.target.value);
});
