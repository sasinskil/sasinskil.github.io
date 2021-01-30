"use strict";

let projectsList,
  moreButton,
  githubReposAPiUrl,
  createProjectItem,
  addToProjectList,
  manageElements,
  fetchRepos,
  repos;

projectsList = document.querySelector(".projects__list--js");
moreButton = document.querySelector(".projects__more--js");
githubReposAPiUrl = `https://api.github.com/users/sasinskil/repos`;

createProjectItem = ({ name, description, homepage, html_url }) => {
  return `
    <li class="projects__item">
        <div class="projects__content">
          <img class="projects__github-logo" src="assets/img/github-icon.svg" alt="Github logo">
          <h4 class="projects__sub-title">${name}</h4>
          <p class="projects__description">${description}</p>
        </div>
        <div class="projects__footer">
          ${
            homepage
              ? `<a class="projects__link projects__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>`
              : ""
          }
          <a class="projects__link projects__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
        </div>
      </li>
    `;
}

addToProjectList = (repo) => {
  const newElement = createProjectItem(repo);
  projectsList.innerHTML += newElement;
}

manageElements = () => {
  if (moreButton.innerHTML === "Less") {
    projectsList.innerHTML = "";
    for (let repo of repos.slice(0, 4)) {
      addToProjectList(repo);
    }
    moreButton.innerHTML = "More";
  } else {
    for (let repo of repos.slice(4)) {
      addToProjectList(repo);
    }
    moreButton.innerHTML = "Less";
  }
}

fetchRepos = (apiUrl) => {
  fetch(apiUrl)
    .then((resp) => resp.json())
    .then((data) => {
      repos = data;
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      if (projectsList) {
        if (repos.length > 0) {
          for (let repo of repos.slice(0, 4)) {
            addToProjectList(repo);
          }

          moreButton.addEventListener("click", manageElements);
        }
      }
    })
    .catch((err) => console.log(`Something went wrong, ${err}`));
}

fetchRepos(githubReposAPiUrl);
