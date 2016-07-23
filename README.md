A redux project to serve as a template to start building a redux-react app.

````
git clone https://github.com/sandeep45/redux-template.git
npm install
npm start
````

Dependecy: A backend API server which responds to `http://localhost:3000/phone_numbers.json`

This template includes an index page with `pagination`, `isFetching` & `error` as shared components.

It has a `entities` & `paginate` as a generic reducer which will work for all models.

There is use of thunks & routes as well.

The tests are setup in `mocha` and asserted via `expect.js`

TODO:
add, show, update & delete of phone numbers