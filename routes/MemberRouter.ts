import { PATH_INICIAL, PATH_PARAM_ID } from '../constants/constants'
import { BaseRouter } from './BaseRouter'
import * as express from 'express'
import { MemberController } from '../controllers/MemberController'

export class MemberRouter extends BaseRouter {
  private MemberController: MemberController

  constructor() {
    super()
    this.MemberController = new MemberController()
    this.buildRoutes()
  }

  private async getAllMembers(req: express.Request, res: express.Response){
    const membersList = await this.MemberController.getAll
    return membersList
  }

  private async updateMember(req: express.Request, res: express.Response) {
    const member = req.body
    const { id } = req.params
    const Response = await this.MemberController.updateMember({ ...member, id })
    res.status(200).send(Response)
  }

  private async deleteMemberById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const Response = await this.MemberController.deleteMemberById(id)
    res.status(200).send(Response)
  }

  private buildRoutes() {
    this.router.get(PATH_INICIAL, this.getAllMembers.bind(this))
    this.router.put(PATH_PARAM_ID, this.updateMember.bind(this))
    this.router.delete(PATH_PARAM_ID, this.deleteMemberById.bind(this))
  }
}
