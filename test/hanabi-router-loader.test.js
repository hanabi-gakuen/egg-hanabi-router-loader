const assert = require('assert')
const mock = require('egg-mock')

describe('test/hanabi-router-loader.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/hanabi-router-loader-test'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hello')
      .expect(200)
  })

  it('should return 404', () => {
    return app.httpRequest()
      .get('/userList/4')
      .expect(404)
  })

  it('should GET user list', async () => {
    const resp = await app.httpRequest()
      .get('/userList')
      .expect(200)
    assert.deepEqual(resp.body, [
      { id: '1', name: 'user1' },
      { id: '2', name: 'user2' }
    ])
  })
})
