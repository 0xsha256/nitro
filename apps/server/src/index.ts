import express from 'express'
import compression from 'compression'
import { config } from 'dotenv'
import message from './utils/messages/system'
import routes from './utils/auto-route'
import path from 'path'

config()

const app = express()
const prod = process.env.NODE_ENV === 'prod'

app.use(compression())

export const server = app.listen(process.env.SERVER_PORT, () => {
  prod ? {} : message()
  routes(app, {
    dir: path.resolve(__dirname, './routes') // relative to your cwd
  })
})
