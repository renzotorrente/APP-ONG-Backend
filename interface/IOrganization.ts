export interface IupdateOrganization {
  id: number
  name?: string
  phone?: string
  address?: string
  welcomeText?: string
  image?: string
  facebookUrl?: string
  linkedInUrl?: string
  instagramUrl?: string
}
export interface IOrganization {
  name: string
  phone: string
  address: string
  welcomeText: string
  image: string
  facebookUrl: string
  linkedInUrl: string
  instagramUrl: string
  updatedAt?: string
  createdAt?: string
  deletedAt?: string
}
