import { UserController } from '../controllers/UserController'
import * as express from 'express'
import { BaseRouter } from './BaseRouter'
import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  URL_AUTH_ROUTER,
} from '../constants/constants'
import { body, validationResult } from 'express-validator'
import * as bcrypt from 'bcrypt'
import { LoginToken, DecodeToken } from '../jwt'
import ExpressValidatorError from '../errors/ExpressValidatorError'
import { registerValidations } from '../expressValidations/registerValidations'

export class Auth extends BaseRouter {
  private userController: UserController

  constructor() {
    super()
    this.userController = new UserController()
    this.buildRoutes()
  }

  public async Login(req: express.Request, res: express.Response) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false })
    }

    const { email, password } = req.body

    const user = await this.userController.findByEmail(email)

    if (!user) {
      return res.status(400).json({ msg: 'Invalid authentication' })
    } else if (bcrypt.compareSync(password, user.password)) {
      const responseJWTData = await LoginToken({
        email: user.email,
        role: user.role,
      })

      return res.json({ ...responseJWTData, role: user.role, id: user.id })
    } else {
      return res.status(400).json({ msg: 'Invalid authentication' })
    }
  }

  private async registerUser(req: express.Request, res: express.Response) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array())
    }

    const user = req.body
    const encryptedPassword = await bcrypt.hash(user.password, 10)
    user.password = encryptedPassword
    user.role = 'member'
    const newUser = await this.userController.createUser(user)
    return res.status(200).json(newUser)
  }

  public async getAuthByToken(req: express.Request, res: express.Response) {
    const token = JSON.stringify(req.headers.authorization)
    const decodedToken = DecodeToken(token)
    const userData = await this.userController.findByEmail(decodedToken.email)
    res.json(userData)
    return res.status(200)
  }

  private buildRoutes() {
    this.router.post(
      AUTH_LOGIN,
      body('email').not().isEmpty().isEmail(),
      this.Login.bind(this)
    )
    this.router.post(
      AUTH_REGISTER,
      registerValidations,
      this.registerUser.bind(this)
    )
    this.router.get(URL_AUTH_ROUTER, this.getAuthByToken.bind(this))
  }
}
