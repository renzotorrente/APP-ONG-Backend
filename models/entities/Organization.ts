import { TABLE_NAME_ORGANIZATION } from '../../constants/constants'
import {
  AllowNull,
  Column,
  Table,
  DataType,
  Model,
  BelongsToMany,
  HasMany,
  Default,
} from 'sequelize-typescript'
import { BaseModel } from './BaseModel'
import { Slider } from './Slider'

@Table({ tableName: TABLE_NAME_ORGANIZATION })
export class Organization extends BaseModel {
  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  image: string

  @AllowNull(true)
  @Column
  phone: string

  @AllowNull(true)
  @Column
  address: string

  @AllowNull(false)
  @Column(DataType.TEXT)
  welcomeText: string

  @Default("")
  @Column(DataType.STRING)
  facebookUrl: string

  @Default("")
  @Column(DataType.STRING)
  linkedInUrl: string

  @Default("")
  @Column(DataType.STRING)
  instagramUrl: string

  @HasMany(() => Slider)
  sliders: Slider[]
}
