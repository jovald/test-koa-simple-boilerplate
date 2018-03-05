const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async ctx => {
  const user = await controller.read()
  ctx.body = user
})

router.post('/', async ctx => {
  const data = ctx.request.body
  const user = await controller.create({ data })
  ctx.body = user
})

module.exports = router.routes()
