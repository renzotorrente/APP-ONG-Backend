import {
  AllowNull,
  BeforeSave,
  Column,
  DataType,
  Default,
  HasOne,
  IsEmail,
  Table,
  Unique,
} from 'sequelize-typescript'
import { BaseModel } from './BaseModel'
import { RoleEnum } from '../enums/RoleEnum'
import { TABLE_NAME_USER } from '../../constants/constants'

@Table({ tableName: TABLE_NAME_USER })
export class User extends BaseModel {
  @AllowNull(false)
  @Column
  firstName: string

  @AllowNull(false)
  @Column
  lastName: string

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column
  email: string

  @AllowNull(false)
  @Column
  password: string

  @Column(DataType.ENUM(RoleEnum.ADMIN, RoleEnum.MEMBER))
  role: RoleEnum

  @Column
  image: string
}
