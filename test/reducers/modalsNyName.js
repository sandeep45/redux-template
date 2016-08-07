import expect from 'expect';
import K from '../../src/js/constants/'

import modalsByName, * as fromModalsByName from '../../src/js/reducers/modalsByName.js'

describe("modalsByName.js", () => {

  it("returns empty object when unknown action is given", () => {
    const newState = modalsByName(undefined, {});
    expect(newState).toBeA(Object)
  });

  it("returns modal name when action has a name in meta", () => {
    const newState = modalsByName(undefined, {type:undefined, meta: {name: "LOGIN"}});
    expect(newState).toBeA(Object);
    expect(newState["LOGIN"]).toBe(false);
  });

  it("returns modal name with true when action has name and says show", () => {
    const newState = modalsByName(undefined, {type:K.SHOW_MODAL, meta: {name: "LOGIN"}});
    expect(newState).toBeA(Object);
    expect(newState["LOGIN"]).toBe(true);
  });

  it("returns modal name with false when action has name and says hide", () => {
    const newState = modalsByName(undefined, {type:K.HIDE_MODAL, meta: {name: "LOGIN"}});
    expect(newState).toBeA(Object);
    expect(newState["LOGIN"]).toBe(false);
  });

  it("returns existing modal names as-is with new modal names", () => {
    const newState = modalsByName({x: true, y:false}, {type:K.SHOW_MODAL, meta: {name: "z"}});
    expect(newState).toBeA(Object);
    expect(newState["x"]).toBe(true);
    expect(newState["y"]).toBe(false);
    expect(newState["z"]).toBe(true);
    console.log(newState);
  });

  it("returns false when asked for a non existant modal name", () => {
    const existingState = {x: true, y:false};
    expect(fromModalsByName.showModal(existingState , "z")).toBe(false);
  });

  it("returns true when asked for an existing true modal name", () => {
    const existingState = {x: true, y:false};
    expect(fromModalsByName.showModal(existingState , "x")).toBe(true);
  });

  it("returns false when asked for an existing falsemodal name", () => {
    const existingState = {x: true, y:false};
    expect(fromModalsByName.showModal(existingState , "y")).toBe(false);
  });


});
