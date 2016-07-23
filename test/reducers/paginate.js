import expect from 'expect'

import paginate from '../../src/js/reducers/paginate.js'
import K from '../../src/js/constants/'
var util = require('util');


describe("paginate.js", () => {
  let oldState = {};

  beforeEach("setting up oldState object", function() {
    oldState = {
      a: 1,
      phoneNumbers: {
        "1": {
          ids: [1,2,3],
          isFetching: false,
          errorMessage: null
        },
        "2": {
          ids: [4,5,6],
          isFetching: false,
          errorMessage: null
        }
      },
      messages: {
        "1": {
          ids: [1,2,3],
          isFetching: false,
          errorMessage: null
        }
      }
    };
  });


  it("it exists", () => {
    expect(paginate).toExist();
  });

  it("on sucess action it adds page object under the model and then page number ", () => {

    const action = {
      type: K.RECEIVE_PHONE_NUMBERS,
      payload: {
        result: [11,12,13]
      },
      meta: {
        source: "phoneNumbers",
        pageNumber: "1"
      }
    };

    const newState = paginate(oldState, action);

    console.dir(oldState, {depth: null, colors:true});
    console.dir(newState, {depth: null, colors:true});

    expect(newState.phoneNumbers["1"].ids).toEqual([11,12,13]);
    expect(newState.phoneNumbers["1"].isFetching).toEqual(false);
    expect(newState.phoneNumbers["1"].errorMessage).toEqual(null);

  });

  it("on loading action it updates isFetching in page object under the model and then page number ", () => {

    const action = {
      type: K.RECEIVE_PHONE_NUMBERS,
      meta: {
        source: "phoneNumbers",
        pageNumber: "1"
      }
    };

    const newState = paginate(oldState, action);

    expect(newState.phoneNumbers["1"].isFetching).toEqual(true);
    expect(newState.phoneNumbers["1"].ids).toEqual([1,2,3]);
    expect(newState.phoneNumbers["1"].errorMessage).toEqual(null);

  });

  it("on error action it updates errorMessage in page object under the model and then page number ", () => {

    const action = {
      type: K.RECEIVE_PHONE_NUMBERS,
      error: true,
      payload: new Error("boom"),
      meta: {
        source: "phoneNumbers",
        pageNumber: "1"
      }
    };

    const newState = paginate(oldState, action);

    expect(newState.phoneNumbers["1"].isFetching).toEqual(false);
    expect(newState.phoneNumbers["1"].ids).toEqual([1,2,3]);
    expect(newState.phoneNumbers["1"].errorMessage).toEqual("boom");

  });

});
