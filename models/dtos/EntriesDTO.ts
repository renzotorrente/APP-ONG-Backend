import { Entry } from "../entities/Entry"

export class EntryDTO {
  public id?: number
  public name: string
  public content: string
  public image: string
  public categoryId: number
  public type: string
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date
  constructor(entry: Entry) {
    this.id = entry.id
    this.name = entry.name
    this.content = entry.content
    this.image = entry.image
    this.categoryId = entry.categoryId
    this.type = entry.type
    this.createdAt = entry.createdAt;
    this.updatedAt = entry.updatedAt;
    this.deletedAt = entry.deletedAt;
  }
}