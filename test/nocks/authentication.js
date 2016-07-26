export const loginSuccess = nock => {
  nock(/http:\/\/localhost/, {"encodedQueryParams":true})
      .post('/users/sign_in', {"user":{"email":"sandeep45@gmail.com","password":"12345678"}})
      .reply(201, {"authentication_token":"WAGzPbE49sh9cSD21mea","created_at":"2016-07-23T18:41:43Z","email":"sandeep45@gmail.com","id":1,"updated_at":"2016-07-25T01:53:49Z"}, { location: 'http://localhost:3000/',
      'content-type': 'application/json; charset=utf-8',
      'x-ua-compatible': 'IE=Edge',
      etag: '"164f0a8fa5b7d667ae5a55bac5da7633"',
      'cache-control': 'max-age=0, private, must-revalidate',
      'x-request-id': '37d427e3ae2427db92bcc66db6fd1033',
      'x-runtime': '0.067432',
      server: 'WEBrick/1.3.1 (Ruby/2.1.3/2014-09-19)',
      date: 'Mon, 25 Jul 2016 01:53:49 GMT',
      'content-length': '156',
      connection: 'close',
      'set-cookie': [ '_meme_backend_session=; expires=Thu, 01-Jan-1970 00:00:00 GMT' ] });

};

export const loginFailure = nock => {
  nock(/http:\/\/localhost/, {"encodedQueryParams":true})
      .post('/users/sign_in', {"user":{"email":"sandeep45@gmail.com","password":"1234567"}})
      .reply(401, {"error":"Invalid email or password."}, { 'content-type': 'application/json; charset=utf-8',
      'x-ua-compatible': 'IE=Edge',
      'cache-control': 'no-cache',
      'x-request-id': '6eb2cc6f017a5161d61ac037deee6b69',
      'x-runtime': '0.063632',
      server: 'WEBrick/1.3.1 (Ruby/2.1.3/2014-09-19)',
      date: 'Mon, 25 Jul 2016 01:45:23 GMT',
      'content-length': '38',
      connection: 'close',
      'set-cookie': [ '_meme_backend_session=; expires=Thu, 01-Jan-1970 00:00:00 GMT' ] });

}