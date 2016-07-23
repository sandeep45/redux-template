import expect from 'expect'
import nock from 'nock'
import * as nocks from '../nocks/'
import axios from 'axios';

import * as phoneNumberActions from '../../src/js/actions/phoneNumber'
import K from '../../src/js/constants'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialStoreData = { };

var store;

beforeEach(() => {
  store = mockStore(initialStoreData);
});


describe("fetchPhoneNumbers2", () => {

  it("exists", () => {
    expect(phoneNumberActions.fetchPhoneNumbers2).toExist()
  });

  it("reutrns promise", () => {
    const result = store.dispatch(
      phoneNumberActions.fetchPhoneNumbers2("1")
    );
    expect(result.then).toExist()
  });

  it("dispatches an action immediately with no payload & no error", () => {
    const result = store.dispatch(
      phoneNumberActions.fetchPhoneNumbers2("1")
    );
    expect(store.getActions()[0].type).toEqual(K.RECEIVE_PHONE_NUMBERS);
    expect(store.getActions()[0].payload).toNotExist();
    expect(store.getActions()[0].error).toNotExist();
  });

  it("dispatches action with payload & no error after web call is successfuly", () => {

    nocks.phoneNumbersIndexSuccess(nock);

    const result = store.dispatch(
      phoneNumberActions.fetchPhoneNumbers2("1")
    );

    return result.
      then(
        (resp) => {
          expect(store.getActions()[1].type).toEqual(K.RECEIVE_PHONE_NUMBERS);
          expect(store.getActions()[1].payload).toExist();
          expect(store.getActions()[1].error).toNotExist();
        }
      )
  });

  it("dispatches action with error object in payload & error as true after web call fails", () => {

    nocks.phoneNumbersIndexFailure(nock);

    const result = store.dispatch(
      phoneNumberActions.fetchPhoneNumbers2("1")
    );

    return result.
      then(
        () => {
          expect(store.getActions()[1].type).toEqual(K.RECEIVE_PHONE_NUMBERS);
          expect(store.getActions()[1].payload).toExist();
          expect(store.getActions()[1].payload).toBeA(Error);
          expect(store.getActions()[1].error).toEqual(true);
        }
      )
  });

});