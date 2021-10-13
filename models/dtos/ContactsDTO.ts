import { Contacts } from '../entities/Contacts'

export class ContactDTO {
  public id?: number
  public name: string
  public email: string
  public phone: string
  public message: string
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date

  constructor(contact: Contacts) {
    this.id = contact.id
    this.name = contact.name
    this.phone = contact.phone
    this.email = contact.email
    this.createdAt = contact.createdAt
    this.updatedAt = contact.updatedAt
    this.deletedAt = contact.deletedAt
  }
}
