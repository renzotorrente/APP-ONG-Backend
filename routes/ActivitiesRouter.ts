import * as express from 'express'
import { validationResult } from 'express-validator'
import { upload } from "./middleware/multer";
import { ActivitiesController } from '../controllers/ActivitiesController'
import { BaseRouter } from './BaseRouter'
import ExpressValidatorError from '../errors/ExpressValidatorError'
import { createActivityValidations, updateActivityValidations } from '../expressValidations/activityValidation'
import { getByIdValidations } from '../expressValidations/newsValidations'
import { S3Controller } from '../controllers/S3controller'
import { ACTIVITIES_FILE_DESTINATION, AWS_URL_PROTOCOL, MISSING_IMAGE_MESSAGE } from '../constants/constants'
import moment = require('moment')

export class ActivitiesRouter extends BaseRouter {
  private activitiesController: ActivitiesController
  private s3Controller: S3Controller;

  constructor() {
    super()
    this.activitiesController = new ActivitiesController()
    this.s3Controller = new S3Controller();
    this.buildRoutes()
  }

  public async getAllActivities(req: express.Request, res: express.Response){
    const activities = await this.activitiesController.getActivities();

    return res.json(activities);
  }

  public async createActivity(req: express.Request, res: express.Response) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const activity = req.body;

    console.log(activity)
    
    if(!req.file){
      return res.status(400).json([{message: MISSING_IMAGE_MESSAGE}])
    }
    const imageName = activity.name + moment().format();
    
    const image = AWS_URL_PROTOCOL + this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.file), ACTIVITIES_FILE_DESTINATION, imageName);
    activity.image = image;
      
    const newActivity = await this.activitiesController.createActivity(activity);

     return res.status(200).json(newActivity)
  }

  public async updateActivity(req: express.Request, res: express.Response){
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);

    const activityData = req.body;

    
    const activity = await this.activitiesController.getActivityById(id);
    if(req.files && req.files.length > 0){
      const imageName = activity.image.split('/').slice(-1)[0];
      this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.files[0]), ACTIVITIES_FILE_DESTINATION, imageName);
    }
    activityData.image = activity.image;

    const updateActivity = await this.activitiesController.updateActivity(id, activityData);

    return res.status(200).json(updateActivity)
  }

  public async deleteActivity(req: express.Request, res: express.Response){
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = req.params.id;

    const response = await this.activitiesController.deleteActivity(id);

    return res.status(200).json({deteled: response})
  }

  public async getActivityById(req: express.Request, res: express.Response){
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);

    const activity = await this.activitiesController.getActivityById(id);

    return res.status(200).json(activity)

  }

  private buildRoutes() {
    this.router.post('/', upload.single("imageFile"), createActivityValidations, this.createActivity.bind(this));
    this.router.get('/',  this.getAllActivities.bind(this));
    this.router.get('/:id', getByIdValidations, this.getActivityById.bind(this));
    this.router.put('/:id', upload.array("imageFile", 1), updateActivityValidations, this.updateActivity.bind(this));
    this.router.delete('/:id', getByIdValidations, this.deleteActivity.bind(this));
  }
}
