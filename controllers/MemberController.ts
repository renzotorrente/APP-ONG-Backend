import { IMember } from 'interface/IMember'
import { MemberQuerys } from '../querys/MemberQuerys'

export class MemberController {
  private Query: MemberQuerys
  constructor() {
    this.Query = new MemberQuerys()
  }
  public async getAll(){
    return await this.Query.getMembers()
  }

  public async updateMember(member: IMember) {
    return await this.Query.updateMember(member)
  }

  public async deleteMemberById(id: string) {
    return await this.Query.deleteMemberById(id)
  }
}
