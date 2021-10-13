import { Members } from 'models/entities/Members'

export class MembersDTO {
  public name: string
  public image: string

  constructor(member: Members) {
    this.name = member.name
    this.image = member.image
  }
}
