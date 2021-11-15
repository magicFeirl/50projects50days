const searchEle = document.querySelector(".search");
const mainEle = document.querySelector("#main");
const API_BASEURL = "https://api.github.com/users/";

async function getUserProfile(username) {
    const api = API_BASEURL + username;
    const response = await fetch(api);
    return await response.json();
}

async function getRepos(username, limit = 7) {
    const api = `https://api.github.com/users/${username}/repos?sort=created`;
    const response = await fetch(api);
    return (await response.json()).slice(0, limit);
}

searchEle.addEventListener("keyup", async function (e) {
    if (e.code === "Enter") {
        const userProfile = await getUserProfile(e.target.value);
        const userRepos = await getRepos(e.target.value, 7);
        const repos = [];

        userRepos.forEach((item) => {
            repos.push(
                `<span><a href="${item.html_url}" target="_blank">${item.name}</a></span>`
            );
        });

        const innerEle = document.createElement("div");
        innerEle.style.padding = "50px 25px";
        innerEle.innerHTML = `
      <img
          class="avatar"
          src="${userProfile.avatar_url}"
          alt=""
      />

      <div class="user-profile">
          <h2 class="name">${userProfile.name}<small>${
      userProfile.login
    }</small></h2>
          <p class="profile">${
            userProfile.bio || "(user doesn't have bio)"
          }</p>
          <div class="follow-info">
          <span>${userProfile.followers} Followers</span>
          <span>${userProfile.following} Following</span>
          <span>${userProfile.public_repos} Repos</span>
          </div>
          <div class="tags">
          ${repos.join("")}
          </div>
      </div>
  `;
        mainEle.innerHTML = "";
        mainEle.appendChild(innerEle);

        e.target.value = "";
    }
});
