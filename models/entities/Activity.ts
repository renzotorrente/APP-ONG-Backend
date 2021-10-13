import { AllowNull, Column, DataType, Table } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'

@Table({ tableName: 'activities' })
export class Activity extends BaseModel {
  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column(DataType.TEXT)
  content: string

  @AllowNull(true)
  @Column
  image: string
}
