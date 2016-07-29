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

### Dependecies:

A backend API server which responds to:

- `http://localhost:3000/phone_numbers.json`
- `http://localhost:3000/users/sign_in`
- `http://localhost:3000/users`
- `http://localhost:3000/users/password`

###TODO:

- wizard (sub menu) in bottom bar to go forward and back
- Add Uploading file
- show uploaded files images (detect size)
- tabs on a panel to change table data
- manipuate page onClick
- add, show, update & delete of phone numbers
- Add debugging to Tests
- Add standards project
- Add Charts
- Sorting in tables
- html structure refactor of auth and refactor routes to be under Auth with its own Template Page