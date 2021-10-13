import { IOrganization, IupdateOrganization } from "../interface/IOrganization";
import { OrganizationQuerys } from "../querys/OrganizationQuerys";
import social from "../constants/SocialData";
import { MAIN_ORGANIZATION_ID } from "../constants/constants";
export class OrganizationController {
  private Query: OrganizationQuerys;

  constructor() {
    this.Query = new OrganizationQuerys();
  }

  public async createOrganization(organization: IOrganization) {
    return await this.Query.newOrganization(organization);
  }

  public async findById(id: number) {
    const organization = await this.Query.getById(id);
    if (id !== MAIN_ORGANIZATION_ID) {
      return organization;
    } else {
      return { ...organization, social };
    }
  }

  public async updateOrganization(updateOrganization: IupdateOrganization) {
    return await this.Query.updateOrganization(updateOrganization);
  }

  public async deleteOrganization(id: number) {
    return await this.Query.deleteOrganization(id);
  }
}
