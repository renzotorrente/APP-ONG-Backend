import { BaseRouter } from "./BaseRouter";
import * as express from "express";
import { OrganizationController } from "../controllers/OrganizationController";
import { AWS_URL_PROTOCOL, MISSING_IMAGE_MESSAGE, PATH_INICIAL, URL_ORGANIZATION_ROUTER } from "../constants/constants";
import { S3Controller } from "../controllers/S3controller";
import moment = require("moment");
import { upload } from "./middleware/multer";

export class OrganizationRouter extends BaseRouter {
  private OrganizationController: OrganizationController;
  private s3Controller: S3Controller;

  constructor() {
    super();
    this.OrganizationController = new OrganizationController();
    this.s3Controller = new S3Controller();
    this.buildRoutes();
  }

  public async getOrganizationById(
    req: express.Request,
    res: express.Response
  ) {
    const { id } = req.params;
    const Organization = await this.OrganizationController.findById(+id);
    return res.status(200).json(Organization);
  }

  public async createOrganization(req: express.Request, res: express.Response){
    const organizationData = req.body;

    if(!req.file){
      return res.status(400).json([{message: MISSING_IMAGE_MESSAGE}])
    }
    const imageName = organizationData.name + moment().format();
    
    const image = AWS_URL_PROTOCOL + this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.file), 'entries/organizations', imageName);
    organizationData.image = image;
    
    const organization = await this.OrganizationController.createOrganization(organizationData);
    return res.status(200).json(organization);

  }

  public async editOrganization(req: express.Request, res: express.Response){
    const organizationData = req.body
    const id = 1
    
    const entry = await this.OrganizationController.findById(id);
    if(req.files && req.files.length > 0){
      const imageName = entry.image.split('/').slice(-1)[0];
      this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.files[0]), 'entries/organization', imageName);
    }
    organizationData.id = id
    organizationData.image = entry.image;
    const organizationUpdate = await this.OrganizationController.updateOrganization(organizationData)

    return res.json(organizationUpdate)
  }

  private buildRoutes() {
    this.router.get(
      URL_ORGANIZATION_ROUTER,
      this.getOrganizationById.bind(this)
    );
    this.router.post(
      PATH_INICIAL,
      upload.single("imageFile"),
      this.createOrganization.bind(this)
    )
    this.router.put(
      PATH_INICIAL,
      upload.array("imageFile", 1),
      this.editOrganization.bind(this)
    )
  }
}
