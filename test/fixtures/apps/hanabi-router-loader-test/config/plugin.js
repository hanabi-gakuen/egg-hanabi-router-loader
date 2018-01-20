const path = require('path')

exports.hanabiRouterLoader = {
  enable: true,
  path: path.join(__dirname, '../../../../../')
}
exports.user = {
  enable: true,
  path: path.join(__dirname, '../plugins/user')
}
