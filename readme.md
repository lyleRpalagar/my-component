# React Component Template

React Component dev environment for authoring & publishing react components independent of a project.


## Features

*   [React](https://facebook.github.io/react/): THE component-based view library.
*   [WebPack](https://webpack.github.io/): module bundler.
*   [PostCSS](https://github.com/postcss/postcss): CSS transformations via JS
*   [CSS Modules](https://github.com/css-modules/css-modules): private name spaces for css classes.
*   [CSSNext](http://cssnext.io/): future CSS today.
*   [React StoryBook](https://github.com/kadirahq/react-storybook): a component authoring sandbox. also component functional testing .
*   [Enzyme](https://github.com/airbnb/enzyme) & [Tape](https://github.com/substack/tape): unit testing
*   [Eslint](http://eslint.org/): JS linting.


## Development


### Commands

*   `npm start` to run a dev server to view changes during development (port:8080)
*   `npm test` to run unit tests.
*   `npm run lint` to lint files.


### Authoring

Edit the contents of the [src](src) directory:

*   [./src/Component.js](./src/Component.js): main JSX export
*   [./src/Component.js](./src/Component.js): components main style
*   [./src/Component.spec.js](./src/Component.spec.js): unit test for the component
*   [./src/ComponentStory.js](./src/ComponentStory.js): the [react-storybook Story](https://github.com/kadirahq/react-storybook) for function/ui testing
