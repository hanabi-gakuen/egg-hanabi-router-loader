module.exports = app => {
  const { router, controller } = app

  router.get('/userList', controller.home.list)
}
