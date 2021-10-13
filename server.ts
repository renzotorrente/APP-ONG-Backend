require('express-async-errors')
require('dotenv').config()
import * as express from 'express'
import * as config from './config/config'
import * as http from 'http'
import { Models } from './models'
import { Router } from './routes/index'
import { errorHandler } from './errors/ErrorHandler'
import { InternalServerError } from './errors/InternalServerError'
import morgan = require('morgan')
import path = require('path')
import { DEVELOPMENTMODE } from './constants/constants'
import cors = require('cors');

export class Server {
  public static app: express.Express

  constructor() {}

  public static async initializeApp(): Promise<http.Server> {
    try {
      Server.app = express()
      Server.configureApp()
      Router.initializeRoutes(Server.app)

      Server.app.use(errorHandler)
      Server.app.set('views', path.join(__dirname, './views'))
      Server.app.set('view engine', 'ejs')
      Server.app.use(express.static(path.join(__dirname, './public')))

      try {
        await Server.initializeDatabase()
      } catch (error) {
        console.error('Failed to initialize database', error)
      }

      return Server.app.listen(Server.app.get('port'))
    } catch (error) {
      throw new InternalServerError(error.message)
    }
  }

  private static initializeDatabase() {
    const nodeEnv = process.env.NODE_ENV
    if (!nodeEnv) throw new InternalServerError('No NODE ENV set')
    const sequelizeConfig = config[nodeEnv]
    const models = new Models(sequelizeConfig)
    return models.initModels()
  }

  private static configureApp() {
    const nodeEnv = process.env.NODE_ENV
    Server.app.set('port', process.env.PORT || 3000)
    Server.app.use(express.urlencoded({ extended: true })) // agregue esta linea para que pueda leer el body del request, sin esta linea, no lo lee. Matias
    Server.app.use(express.json())
    Server.app.use(cors())
    if (nodeEnv === DEVELOPMENTMODE) {
      Server.app.use(
        morgan(
          ':method :url :status :res[content-length] - :response-time ms :json'
        )
      )
      morgan.token('json', (req: express.Request) => {
        return JSON.stringify(req.body)
      })
    }
  }
}
