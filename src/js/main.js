"use strict";


console.log(`Hello friend!`);

const projectsList = document.querySelector('.projects__list--js');


if (projectsList) {

  fetch(`https://api.github.com/users/sasinskil/repos?sort=created&direction=desc`)
    .then(resp => resp.json())
    .then(resp => {
      const repos = resp;

      if (repos.length > 0) {
        for (let repo of repos) {
          const { name, description, homepage, html_url } = repo;

          if (homepage) {
            projectsList.innerHTML += `
            <li class="projects__item">
              <div class="projects__content">
               <img class="projects__github-logo" src="assets/img/github-icon.svg" alt="Github logo">
               <h4 class="projects__sub-title">${name}</h4>
               <p class="projects__description">${description}</p>
              </div>
            <div class="projects__footer">
              <a class="projects__link projects__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>
              <a class="projects__link projects__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
            </div>
          </li>
            `
          }
        }
      }
    })
    .catch(err => alert(`Something went wrong, ${err}`));
}