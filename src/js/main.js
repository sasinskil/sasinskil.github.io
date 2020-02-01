"use strict";


console.log(`Hello friend!`);

const projectsList = document.querySelector('.projects__list--js');
const moreButton = document.querySelector('.projects__more--js');


if (projectsList) {

  moreButton.classList.add('projects__more--hide');
  fetch(`https://api.github.com/users/sasinskil/repos?sort=updated&direction=desc`)
    .then(resp => resp.json())
    .then(resp => {
      moreButton.classList.remove('projects__more--hide');
      const repos = resp;

      if (repos.length > 0) {
        for (let repo of repos.slice(0, 6)) {
          const { name, description, homepage, html_url } = repo;

          if (projectsList && homepage) {
            projectsList.innerHTML +=
            `
            <li class="projects__item">
              <div class="projects__content">
               <img class="projects__github-logo" src="assets/img/github-icon.svg" alt="Github logo">
               <h4 class="projects__sub-title">${name}</h4>
               <p class="projects__description">${description}</p>
              </div>
            <div class="projects__footer">
              ${homepage ? `<a class="projects__link projects__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>` : ''}
              <a class="projects__link projects__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
            </div>
          </li>`
          }
        }

        moreButton.addEventListener('click', () => {
          for (let repo of repos.slice(6)) {
            const { name, description, homepage, html_url } = repo;

            if (homepage) {
              projectsList.innerHTML += 
              `
              <li class="projects__item">
                <div class="projects__content">
                 <img class="projects__github-logo" src="assets/img/github-icon.svg" alt="Github logo">
                 <h4 class="projects__sub-title">${name}</h4>
                 <p class="projects__description">${description}</p>
                </div>
              <div class="projects__footer">
                ${homepage ? `<a class="projects__link projects__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>` : ''}
                <a class="projects__link projects__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
              </div>
            </li>`
            }
          }

          moreButton.classList.add('projects__more--hide');
        });
      }
    })
    .catch(err => alert(`Something went wrong, ${err}`));
}