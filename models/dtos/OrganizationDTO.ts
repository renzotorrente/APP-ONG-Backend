import { Organization } from '../entities/Organization'

type Social = {name: string, url: string, icon: string}
export class OrganizationDTO {
  public id?: number
  public phone: string
  public image: string
  public name: string
  public address: string
  public welcomeText: string
  public social: Social[]
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date

  constructor(Organization: Organization) {
    this.id = Organization.id
    this.address = Organization.address
    this.phone = Organization.phone
    this.image = Organization.image
    this.name = Organization.name
    this.welcomeText = Organization.welcomeText
    this.createdAt = Organization.createdAt
    this.updatedAt = Organization.updatedAt
    this.deletedAt = Organization.deletedAt
    const social = new Array<Social>()
    social.push({name: "facebook", url: Organization.facebookUrl, icon: "Facebook.svg"})
    social.push({name: "linkedin", url: Organization.linkedInUrl, icon: "linkedIn.svg"})
    social.push({name: "instagram", url: Organization.instagramUrl, icon: "Instagram.svg"})
    this.social = social
  }
}
