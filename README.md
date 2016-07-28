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

`entities` & `paginate` as a generic reducer which will work for all models.

thunks, routes, constants, normalizr are used & setup

Tests are setup in `mocha` and asserted via `expect.js`

WebUtil is setup with `axios`.

### Dependecies:

A backend API server which responds to:

- `http://localhost:3000/phone_numbers.json`
- `http://localhost:3000/users/sign_in`
- `http://localhost:3000/users`
- `http://localhost:3000/users/password`

###TODO:

- manipuate page onClick
- add, show, update & delete of phone numbers
- show uploaded files images
- Add debugging to Tests
- Add standards project
- Add Uploading file
- Add parsing of content
- Add Charts
- Sorting in tables
- wizard to go forward and back
- html structure refactor of auth and refactor routes