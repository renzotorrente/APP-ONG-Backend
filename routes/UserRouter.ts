import { PATH_INICIAL, PATH_PARAM_ID } from '../constants/constants'
import * as middlewar from './middleware'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { UserController } from '../controllers/UserController'
import { validationResult } from 'express-validator'
import ExpressValidatorError from '../errors/ExpressValidatorError'
import { getByIdValidations } from '../expressValidations/newsValidations'
import { updateUserValidations } from '../expressValidations/registerValidations'


export class UserRouter extends BaseRouter {

  private userController:UserController

  constructor() {
    super()
    this.userController = new UserController()
    this.buildRoutes()
  }

  public async getAllUsers(req: express.Request, res:express.Response){

    const users = await this.userController.getAll()

    return res.status(200).json(users)


  }

  public async getUserById(req: express.Request, res:express.Response){
    //valid that the id is a number
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);


    const user = await this.userController.findById(id)

    return res.status(200).json(user);
  }

  public async deleteUser(req: express.Request, res:express.Response){

    const deleted = await this.userController.deleteUser(req.params.id)

    return res.status(200).json({deleted})

  }

  public async updateUser(req: express.Request, res:express.Response){
        //valid that the id is a number
        const error = validationResult(req);
        if (!error.isEmpty()) {
          throw new ExpressValidatorError(error.array());
        }
    
        const id = Number(req.params.id);

        const userUpdate = req.body;

        const user = await this.userController.updateUser(userUpdate, id);

        user.password = '*';

        return res.status(200).json(user);
  }

  private buildRoutes() {
    this.router.get(PATH_INICIAL, middlewar.checkAdmin, this.getAllUsers.bind(this))
    this.router.get(PATH_PARAM_ID, getByIdValidations, this.getUserById.bind(this))
    this.router.put(PATH_PARAM_ID, updateUserValidations ,this.updateUser.bind(this))
    this.router.delete(PATH_PARAM_ID , this.deleteUser.bind(this))
  }
}
