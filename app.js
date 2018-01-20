const path = require('path')

module.exports = app => {
  const dirs = []

  app.router.load = dir => {
    if (!path.isAbsolute(dir)) {
      dir = path.join(app.baseDir, dir)
    }
    dirs.push(dir)
  }

  /**
   * After loaded all routers of plugins, load 'app/route.js'
   */
  const loadRouter = app.loader.loadRouter
  app.loader.loadRouter = function() {
    dirs.forEach(dir => app.loader.loadFile(dir))
    loadRouter.call(app.loader)
  }
}
