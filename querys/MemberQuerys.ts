import { MembersDTO } from '../models/dtos/MembersDTO'
import { MEMBERS_LIST_EMPTY, NOT_FOUND_MEMBER } from '../constants/constants'
import { NotFoundError } from '../errors/NotFoundError'
import { Members } from '../models/entities/Members'
import { IMember } from 'interface/IMember'

export class MemberQuerys {

  public async getMembers(){
    const members = await Members.findAll()
    if(!members) throw new NotFoundError(MEMBERS_LIST_EMPTY)
    return Members
  }

  public async updateMember(Member: IMember): Promise<MembersDTO> {
    const memberToUpdate = await Members.findOne<Members>({
      where: { id: Member.id },
    })
    if (!memberToUpdate) throw new NotFoundError(NOT_FOUND_MEMBER)
    memberToUpdate.update({
      ...Member,
      updatedAt: new Date(Date.now()),
    })
    return new MembersDTO(memberToUpdate)
  }

  public async deleteMemberById(id: string) {
    const memberToDelete = await Members.destroy<Members>({
      where: { id },
    })
    if (!memberToDelete) throw new NotFoundError(NOT_FOUND_MEMBER)
    return memberToDelete
  }
}
