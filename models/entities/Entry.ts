import { AllowNull, Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { BaseModel } from './BaseModel'
import { Category } from './Category'

@Table({ tableName: 'entries' })
export class Entry extends BaseModel {
  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  content: string

  @AllowNull(false)
  @Column
  image: string

  @AllowNull
  @Column
  type: string

  @ForeignKey(() => Category)
  @Column
  categoryId: number

  @BelongsTo(() => Category)
  category: Category

}
