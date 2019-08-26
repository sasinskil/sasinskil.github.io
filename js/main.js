!function(c){var e={};function r(n){if(e[n])return e[n].exports;var I=e[n]={i:n,l:!1,exports:{}};return c[n].call(I.exports,I,I.exports,r),I.l=!0,I.exports}r.m=c,r.c=e,r.d=function(c,e,n){r.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:n})},r.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},r.t=function(c,e){if(1&e&&(c=r(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var I in c)r.d(n,I,function(e){return c[e]}.bind(null,I));return n},r.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return r.d(e,"a",e),e},r.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n\r\nconsole.log(`Hello friend!`);\r\n\r\nconst projectsList = document.querySelector(\'.projects__list--js\');\r\n\r\n\r\nif (projectsList) {\r\n\r\n  const findRepositories = () => {\r\n\r\n    fetch(`https://api.github.com/users/sasinskil/repos?sort=created&direction=desc`)\r\n      .then(resp => resp.json())\r\n      .then(resp => {\r\n        const repos = resp;\r\n\r\n        if (repos.length > 0) {\r\n          for (let repo of repos) {\r\n            const { name, description, homepage, html_url } = repo;\r\n\r\n            if (homepage) {\r\n              projectsList.innerHTML += `\r\n            <li class="projects__item">\r\n              <div class="projects__content">\r\n               <img class="projects__github-logo" src="assets/img/github-icon.png" alt="">\r\n               <h4 class="projects__sub-title">${name}</h4>\r\n               <p class="projects__description">${description}</p>\r\n              </div>\r\n            <footer class="projects__footer">\r\n              <a class="projects__link projects__link--demo" href="${homepage}">Demo</a>\r\n              <a class="projects__link projects__link--github" href="${html_url}">Github</a>\r\n            </footer>\r\n          </li>\r\n            `\r\n            }\r\n          }\r\n        }\r\n      })\r\n      .catch(err => alert(`Something went wrong, ${err}`));\r\n  }\r\n  \r\n  findRepositories();\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOzs7QUFHYjs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix3Q0FBd0M7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RCxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0EscUVBQXFFLFNBQVM7QUFDOUUsdUVBQXVFLFNBQVM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG1EQUFtRCxJQUFJO0FBQ3ZEOztBQUVBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKGBIZWxsbyBmcmllbmQhYCk7XHJcblxyXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX2xpc3QtLWpzJyk7XHJcblxyXG5cclxuaWYgKHByb2plY3RzTGlzdCkge1xyXG5cclxuICBjb25zdCBmaW5kUmVwb3NpdG9yaWVzID0gKCkgPT4ge1xyXG5cclxuICAgIGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3Nhc2luc2tpbC9yZXBvcz9zb3J0PWNyZWF0ZWQmZGlyZWN0aW9uPWRlc2NgKVxyXG4gICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICBjb25zdCByZXBvcyA9IHJlc3A7XHJcblxyXG4gICAgICAgIGlmIChyZXBvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCByZXBvIG9mIHJlcG9zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGhvbWVwYWdlLCBodG1sX3VybCB9ID0gcmVwbztcclxuXHJcbiAgICAgICAgICAgIGlmIChob21lcGFnZSkge1xyXG4gICAgICAgICAgICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0c19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c19fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdHNfX2dpdGh1Yi1sb2dvXCIgc3JjPVwiYXNzZXRzL2ltZy9naXRodWItaWNvbi5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicHJvamVjdHNfX3N1Yi10aXRsZVwiPiR7bmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3RzX19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicHJvamVjdHNfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdHNfX2xpbmsgcHJvamVjdHNfX2xpbmstLWRlbW9cIiBocmVmPVwiJHtob21lcGFnZX1cIj5EZW1vPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdHNfX2xpbmsgcHJvamVjdHNfX2xpbmstLWdpdGh1YlwiIGhyZWY9XCIke2h0bWxfdXJsfVwiPkdpdGh1YjwvYT5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gYWxlcnQoYFNvbWV0aGluZyB3ZW50IHdyb25nLCAke2Vycn1gKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGZpbmRSZXBvc2l0b3JpZXMoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);