import { AllowNull, Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'
import { Organization } from './Organization'

@Table({ tableName: 'sliders' })
export class Slider extends BaseModel {
  @AllowNull(false)
  @Column
  imageUrl: string

  @AllowNull(false)
  @Column
  text: string

  @AllowNull(false)
  @Column(DataType.INTEGER)
  order: number

  @ForeignKey(() => Organization)
  @Column
  organizationId: number

  @BelongsTo(() => Organization)
  testimonial: Organization
}
