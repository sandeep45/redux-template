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

### Dependecies:

A backend API server which responds to:

- `http://localhost:3000/phone_numbers.json`
- `http://localhost:3000/users/sign_in`
- `http://localhost:3000/users`
- `http://localhost:3000/users/password`

###TODO:

- Add Uploading file
- show uploaded files images (detect size)
- manipuate page onClick - auth project, tab project
- add, show, update & delete of phone numbers
- Add debugging to Tests
- Add standards project
- Sorting in tables
- Use Flexbox to center the auth page
- form submit can get value by `event.target.elements[0].value`
- IDE - nuclide
- Flow, watchman
- Animation - https://facebook.github.io/react/docs/animation.html
