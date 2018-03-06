const Koa = require('koa')
const router = require('routing')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-morgan')
const responseTime = require('koa-response-time')
const database = require('database')

const app = new Koa()
app.use(responseTime())
app.use(logger('combined'))
app.use(bodyparser())
app.use(router.routes())
app.use(ctx =>  { ctx.type = "json" })

exports.start = async () => {
  try {
    await database.connect()
    console.log('Connected to database')
    await app.listen(3000)
    console.log('Connection on port 3000');
  } catch (error) {
    console.log('Something went wrong', error)
  }
}
