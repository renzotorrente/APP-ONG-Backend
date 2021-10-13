import { Category } from 'models/entities/Category'

export class CategoriesDTO {
  public id?: number
  public name: string
  public description?: string
  constructor(category: Category) {
    this.id = category.id
    this.name = category.name
    this.description = category.description
  }
}
