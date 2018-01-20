const path = require('path')
module.exports = app => {
  app.router.load(path.join(__dirname, 'userRouter.js'))
  app.router.load('app/routerOther.js')
}
