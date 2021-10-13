import { AllowNull, Column, Table, HasMany } from 'sequelize-typescript'
import { BaseModel } from './BaseModel';
import { Entry } from './Entry';

@Table({tableName:"categories"})
export class Category extends BaseModel {
    @AllowNull(false)
    @Column
    name: string
  
    @AllowNull(false)
    @Column
    description: string

    @HasMany(() => Entry)
    sliders: Entry[]
}