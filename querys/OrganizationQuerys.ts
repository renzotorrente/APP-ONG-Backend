import { IOrganization, IupdateOrganization } from '../interface/IOrganization'
import { NOT_FOUND_ORGANIZATION } from '../constants/constants'
import { NotFoundError } from '../errors/NotFoundError'
import { Organization } from '../models/entities/Organization'
import { OrganizationDTO } from '../models/dtos/OrganizationDTO'

export class OrganizationQuerys {
  public async newOrganization(
    organization: IOrganization
  ): Promise<OrganizationDTO> {
    const newOrganization = await new Organization({
      ...organization,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    }).save()
    return new OrganizationDTO(newOrganization)
  }

  public async getById(id: number): Promise<OrganizationDTO> {
    const organization = await Organization.findOne<Organization>({
      where: { id: id },
    })
    if (!organization) throw new NotFoundError(NOT_FOUND_ORGANIZATION)
    return new OrganizationDTO(organization)
  }

  public async updateOrganization(
    updateOrganization: IupdateOrganization
  ): Promise<OrganizationDTO> {
    const organization = await Organization.findOne<Organization>({
      where: { id: updateOrganization.id },
    })
    if (!organization) throw new NotFoundError(NOT_FOUND_ORGANIZATION)
    organization.update({
      ...updateOrganization,
      updatedAt: new Date(Date.now()),
    })
    return new OrganizationDTO(organization)
  }

  public async deleteOrganization(id: number): Promise<OrganizationDTO> {
    const organization = await Organization.findOne<Organization>({
      where: { id: id },
    })
    if (!organization) throw new NotFoundError(NOT_FOUND_ORGANIZATION)
    organization.destroy()
    return new OrganizationDTO(organization)
  }
}
