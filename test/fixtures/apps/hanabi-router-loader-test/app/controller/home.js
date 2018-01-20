const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hello'
  }

  async list() {
    this.ctx.body = await this.service.user.getUserList()
  }
}

module.exports = HomeController
