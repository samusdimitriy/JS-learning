import "./practice.js";
// import LoadMoreBtn from "./components/LoadMoreBtn.js";
// import NewsApiService from "./practice.js";

// const refs = {
//   form: document.getElementById("form"),
//   newsWrapper: document.getElementById("newsWrapper"),
// };

// const newsApiService = new NewsApiService();

// const loadMoreBtn = new LoadMoreBtn({
//   selector: "#loadMore",
//   isHidden: true,
// });

// refs.form.addEventListener("submit", onSubmit);
// loadMoreBtn.button.addEventListener("click", fetchArticles);

// function onSubmit(e) {
//   e.preventDefault();

//   loadMoreBtn.show();
//   newsApiService.query = e.currentTarget.elements.news.value;
//   newsApiService.resetPage();
//   clearNewsList();
//   form.reset();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();

//   getArticlesMarkup()
//     .then((markup) => {
//       updateNewsList(markup);
//       loadMoreBtn.enable();
//     })
//     .catch(onError);
// }

// function getArticlesMarkup() {
//   return newsApiService.getNews().then((data) => {
//     if (!data.articles || data.articles.length === 0) {
//       throw new Error("No articles found");
//     }

//     const markup = data.articles.reduce(
//       (acc, article) => acc + createMarkup(article),
//       ""
//     );

//     return markup;
//   });
// }

// function createMarkup({ title, author, description, url, urlToImage }) {
//   return `<div class="article-card">
//     <h2 class="article-title">${title}</h2>
//         <h3 class="article-author">${author ?? "Unknown"}</h3>
//         <img class="article-img" src="${
//           urlToImage ||
//           "https://img5.goodfon.com/wallpaper/nbig/0/62/tsveta-tekstura-shablon-1.jpg"
//         }" alt="${title}">
//         <p class="article-description">${description}</p>
//         <a target="_blanc" class="article-link" href="${url}">Read more</a>
//     </div>`;
// }

// function updateNewsList(markup) {
//   if (markup) {
//     refs.newsWrapper.insertAdjacentHTML("beforeend", markup);
//   } else {
//     onError(new Error("No articles found"));
//   }
// }

// function onError(err) {
//   clearNewsList();
//   const errorMessage = `<h1>${err}</h1>`;
//   updateNewsList(errorMessage);
//   loadMoreBtn.hide();
// }

// function clearNewsList() {
//   refs.newsWrapper.innerHTML = "";
// }

// newsApiService.query = "developer";
// const result = newsApiService.getNews();

// function handleScroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 50) {
//     fetchArticles();
//   }
// }

// window.addEventListener("scroll", handleScroll);

// const form = document.getElementById("form");
// const profileContainer = document.querySelector(".profile-section");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const login = form.elements.login.value;

//   fetchUser(login)
//     .then(showProfile)
//     .catch((err) => console.log(err));
//   form.reset();
// });

// function showProfile({
//   name,
//   avatar_url,
//   bio,
//   public_repos,
//   followers,
//   following,
// }) {
//   profileContainer.innerHTML = `<div class="profile">
//       <img src="${avatar_url}" alt="user avatar" class="avatar" width="120" height="120" />
//       <div class="content">
//         ${name ? `<h1 class="name">${name}</h1>` : ""}
//         <p class="bio">${bio}</p>
//         <ul class="stats">
//           <li>Followers: <span>${followers}</span></li>
//           <li>Following: <span>${following}</span></li>
//           <li>Repos <span>0</span></li>
//         </ul>
//       </div>
//     </div>`;
// }

// function fetchUser(login) {
//   return fetch(`https://api.github.com/users/${login}`).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText || "Something went wrong");
//     }
//     return res.json();
//   });
// }

// const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// // Change value of id property to update different post
// const postToUpdate = {
//   id: 2,
//   body: "CRUD is really awesome",
// };

// const optionsNew = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(
//   `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`,
//   optionsNew
// )
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log("ERROR" + error));

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}
