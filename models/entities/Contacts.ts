import { AllowNull , Column , IsEmail , Table , Unique } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'
import { TABLE_NAME_CONTACTS } from '../../constants/constants'

@Table({ tableName: TABLE_NAME_CONTACTS })
export class Contacts extends BaseModel {
@AllowNull(false)
@Column
name: string

@AllowNull(false)
@Column
phone: string

@AllowNull(false)
@IsEmail
@Unique
@Column
email: string

@AllowNull(false)
@Column
message: string

}
