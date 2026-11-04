# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal CV site (https://sasinskil.github.io/), built from the "wtf-gulp-starter" template. Source is plain HTML + SCSS + one ES6 file, compiled by Gulp into `dist/`. There is no test suite and no linter.

## Commands

- `npm install -g gulp-cli` then `npm install` — one-time setup. Works on current Node (verified on v24): Sass is compiled with Dart Sass (`sass` + `gulp-sass` 5) and bundling uses Webpack 5, because `node-sass` 4 and Webpack 4 do not run on modern Node. Media queries must be written `and (max-width…)` with a space, which Dart Sass requires.
- Line endings: the repo stores files as CRLF (`core.autocrlf=true`). Tools like `sed -i` and `npm install` can rewrite files as LF and produce whole-file diffs, so check `git diff --stat` after touching `package*.json` or SCSS.
- `gulp` (default task = `serve`) — builds everything into `dist/`, opens BrowserSync on `dist/`, and watches `src/` for changes.
- `gulp build` — one-off build of `dist/` (sass → html → js → assets → pwa).
- `npm run deploy` — runs `gulp build` (via `predeploy`) and pushes `dist/` to the `master` branch with `gh-pages`.

Individual tasks can be run with `gulp sass|html|js|assets|pwa`.

## Branches and deployment

- Development happens on the `source` branch (the default). The `master` branch holds only the built output that GitHub Pages serves; never edit it by hand — it is overwritten by `npm run deploy`.
- `dist/` and `node_modules/` are git-ignored.

## Architecture

- `src/content/index.html` → copied verbatim to `dist/index.html` (no templating). It links `css/main.css` and `js/main.js`, which only exist after a build.
- `src/scss/main.scss` imports `_normalize`, `_variables` (colors, font), and one partial per page section in `src/scss/modules/` (`hero`, `skills`, `projects`, `contact`). Responsive breakpoints (900/800/670px) live at the bottom of `main.scss`, not in the modules. Gulp compiles only `main.scss`, then runs Autoprefixer and writes sourcemaps.
- `src/js/main.js` is the only script, bundled by Webpack (via `webpack-stream` in the `js` gulp task, config in `webpack.config.js`, production mode). It fetches `https://api.github.com/users/sasinskil/repos` at runtime, sorts by `created_at`, and renders repo cards into `.projects__list--js`; the "More"/"Less" button (`.projects__more--js`) toggles between the first 4 repos and all. The `--js` class suffix marks elements used as JS hooks; keep those in sync between the HTML and `main.js`.
- `src/assets/**` → `dist/assets/` and `src/pwa/**` → `dist/` (so `manifest.json` lands at the site root, and its icon paths are relative to `assets/pwa/icons/`). There is no service worker.
- Gulp is written as ESM in `gulpfile.babel.js` (transpiled by `@babel/register`); the watch for JS only matches `src/js/*.js`.
- Styling follows BEM (`projects__item`, `projects__link--demo`, …).
