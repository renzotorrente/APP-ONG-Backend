import { Activity } from "../entities/Activity"

export class ActivityDTO {
  public id?: number
  public name: string
  public content: string
  public image?: string
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date
  constructor(activity: Activity) {
    this.id = activity.id
    this.name = activity.name
    this.content = activity.content
    this.image = activity.image
    this.createdAt = activity.createdAt
    this.updatedAt = activity.updatedAt
    this.deletedAt = activity.deletedAt
  }
}