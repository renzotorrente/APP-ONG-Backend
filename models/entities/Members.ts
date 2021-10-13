import { MEMBERS } from '../../constants/constants'
import { AllowNull, Column, Table } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'

@Table({ tableName: MEMBERS })
export class Members extends BaseModel {
  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  image: string
}
