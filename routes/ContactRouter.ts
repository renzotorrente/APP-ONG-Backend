import {
  INCOMPLETE_DATA,
  PATH_INICIAL,
  CONTACT_MESSAGE_ES, WELCOME_ES
} from '../constants/constants'
import * as middleware from './middleware'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { EmailController } from '../controllers/EmailController'
import { ContactController } from '../controllers/ContactController'
import { getByIdValidations } from '../expressValidations/newsValidations'
import { validationResult } from 'express-validator'
import ExpressValidatorError from '../errors/ExpressValidatorError'
export class ContactRouter extends BaseRouter {
  private EmailSend: EmailController
  private contactController: ContactController

  constructor() {
    super()
    this.contactController = new ContactController()
    this.EmailSend = new EmailController()
    this.buildRoutes()
  }

  public async getAllContacts(req: express.Request, res: express.Response) {
    const contacts = await this.contactController.getAll()

    return res.status(200).json(contacts)
  }
  
  public async getContactById(req: express.Request, res: express.Response) {
    //valid that the id is a number
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);

    const contact = await this.contactController.getContactById(id);

    return res.status(200).json(contact)
  }

  public async CreateNew(req: express.Request, res: express.Response) {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(200).json({ error: INCOMPLETE_DATA })
    }

    const newContact = await this.contactController.CreateNew(req.body)
    this.EmailSend.sendEmail(email, WELCOME_ES, CONTACT_MESSAGE_ES, name)
    return res.status(200).json(newContact)
  }

  private buildRoutes() {
    this.router.get(
      PATH_INICIAL,
      middleware.checkAdmin,
      this.getAllContacts.bind(this)
    )
    this.router.get(
      '/:id',
      getByIdValidations,
      middleware.checkAdmin,
      this.getContactById.bind(this)
    )
    this.router.post(PATH_INICIAL, this.CreateNew.bind(this))
  }
}
