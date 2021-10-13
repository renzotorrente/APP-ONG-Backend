import { RoleEnum } from 'models/enums/RoleEnum'
import { User } from '../entities/User'

export class UserDTO {
  public id?: number
  public firstName: string
  public lastName: string
  public email: string
  public password: string
  public image: string
  public role: RoleEnum
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date

  constructor(user: User) {
    this.id = user.id
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.image = user.image
    this.role = user.role
    this.password = user.password
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
    this.deletedAt = user.deletedAt
  }
}
