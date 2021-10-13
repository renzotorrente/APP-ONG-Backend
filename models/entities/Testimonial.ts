import { AllowNull, Column, DataType, Table } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'

@Table({ tableName: 'testimonials' })
export class Testimonial extends BaseModel {
  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column(DataType.TEXT)
  content: string

  @AllowNull(false)
  @Column
  image: string
}
