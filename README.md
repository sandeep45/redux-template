[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A redux project to serve as a template to start building a redux-react app.

````
git clone https://github.com/sandeep45/redux-template.git
npm install
npm start
````

### It includes

A Phone Numbers index page with `pagination`, `isFetching` & `error` as shared components.

Authentication is built in. This includes Components, Actions & Reducers.

Process & Analyze an uploaded CSV file.

A Generic component called `DropableZone`. It can be used as a parent container to handle dropping of files.

`entities` & `paginate` as a generic reducer which will work for all models.

thunks, routes, constants, normalizr are used & setup

Tests are setup in `mocha` and asserted via `expect.js`

WebUtil is setup with `axios`.

Wizard style Bottom Nav to go back & forward between pages

HighChart Component to render charts and update from state

Added Tab based Navigation. It uses `withRouter`

Added Code to upload an imAGE

To run tests in debug mode use `npm run test:debug`, then use `repl` where u need to get a promt for evaluating variables.

Added Flow.

Bootstrap Modal Component to be used from redux.

### Dependecies:

A backend API server which responds to:

- `http://localhost:3000/phone_numbers.json`
- `http://localhost:3000/users/sign_in`
- `http://localhost:3000/users`
- `http://localhost:3000/users/password`
- `http://localhost:3000/users/1/ads`

### Customize

- specify local storage key for storing app data in `index.js` 
  ```
  sessionStorage.setItem("my-app-initial-data", JSON.stringify(store.getState()));
  ```
- 


###TODO:
- Tooltip with image
- Sorting in tables
- watchman to run flow in real time
- Webstorm - Read, Watch & Practice
- Use local state in react component
- add, show, update & delete of phone numbers
- Route Animation


