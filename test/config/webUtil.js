import expect from 'expect'

import * as webUtil from '../../src/js/config/webUtil'

describe("doUserSignIn", () => {

  it("is present", () => {
    expect(webUtil.doUserSignIn).toExist();
  });

});
