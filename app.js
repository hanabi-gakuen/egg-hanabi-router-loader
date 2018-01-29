const path = require('path')

module.exports = app => {
  const routerPaths = app.loader.getLoadUnits().map(
    u => path.join(u.path, app.config.hanabiRouterLoader.path)
  )
  app.loader.loadRouter = function() {
    routerPaths.forEach(i => {
      app.loader.loadFile(i)
    })
  }
}
