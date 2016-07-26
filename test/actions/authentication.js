import expect from 'expect'
import nock from 'nock'
import * as nocks from '../nocks/'

import * as authenticationActions from '../../src/js/actions/authentication'
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


describe("loginUser", () => {

  it("exists", () => {
    expect(authenticationActions.loginUser).toExist()
  });

  it("reutrns promise", () => {
    const result = store.dispatch(
      authenticationActions.loginUser("sandeep45@gmail.com", "12345678")
    );
    expect(result.then).toExist()
  });

  it("dispatches an action immediately with no payload & no error", () => {
    const result = store.dispatch(
      authenticationActions.loginUser("sandeep45@gmail.com", "12345678")
    );
    expect(store.getActions()[0].type).toEqual(K.DO_LOGIN);
    expect(store.getActions()[0].payload).toNotExist();
    expect(store.getActions()[0].error).toNotExist();
  });

  it("dispatches action with payload & no error after web call is successfull", () => {

    nocks.loginSuccess(nock);

    const result = store.dispatch(
      authenticationActions.loginUser("sandeep45@gmail.com", "12345678")
    );

    return result.
      then(
        (resp) => {
          expect(store.getActions()[1].type).toEqual(K.DO_LOGIN);
          expect(store.getActions()[1].payload).toExist();
          expect(store.getActions()[1].error).toNotExist();
        }
      )
  });

  it("dispatches payload has auth token & email when web call is successfull", () => {

    nocks.loginSuccess(nock);

    const result = store.dispatch(
      authenticationActions.loginUser("sandeep45@gmail.com", "12345678")
    );

    return result.
      then(
        (resp) => {
          expect(store.getActions()[1].payload.authentication_token).toExist();
          expect(store.getActions()[1].payload.email).toExist();
        }
      )
  });

  it("dispatches action with error object in payload & error as true after web call fails", () => {

    nocks.loginFailure(nock);

    const result = store.dispatch(
      authenticationActions.loginUser("sandeep45@gmail.com", "1234567")
    );

    return result.
      then(
        () => {
          expect(store.getActions()[1].type).toEqual(K.DO_LOGIN);
          expect(store.getActions()[1].payload).toExist();
          expect(store.getActions()[1].payload).toBeA(Error);
          expect(store.getActions()[1].error).toEqual(true);
        }
      )
  });

});