import { BaseRouter } from "./BaseRouter";
import * as express from "express";
import { EntriesController } from "../controllers/EntriesController";
import { validationResult } from "express-validator";
import ExpressValidatorError from "../errors/ExpressValidatorError";
import { upload } from "./middleware/multer";
import {
  NEWS,
  PATH_INICIAL,
  NEWS_DELETED_SUCCESS,
  PATH_PARAM_ID,
  NEWS_FILE_DESTINATION,
  MISSING_IMAGE_MESSAGE,
  AWS_URL_PROTOCOL,
} from "../constants/constants";
import {
  createNewsValidations,
  getByIdValidations,
} from "../expressValidations/newsValidations";
import { S3Controller } from "../controllers/S3controller";
import moment = require("moment");

export class NewsRouter extends BaseRouter {
  private entriesController: EntriesController;
  private s3Controller: S3Controller;
  constructor() {
    super();
    this.entriesController = new EntriesController();
    this.s3Controller = new S3Controller();
    this.buildRoutes();
  }

  public async createNews(req: express.Request, res: express.Response) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    
    const news = req.body;
    news.type = NEWS;

    if(!req.file){
      return res.status(400).json([{message: MISSING_IMAGE_MESSAGE}])
    }
    const imageName = news.name + moment().format();
    
    const image = AWS_URL_PROTOCOL + this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.file), NEWS_FILE_DESTINATION, imageName);
    news.image = image;
    
    const newNews = await this.entriesController.createEntry(news);
    return res.status(200).json(newNews);
  }

  public async getNews(_: express.Request, res: express.Response) {
    const limit = _.query.limit;


    let news;

    if(limit === undefined){
      news = await this.entriesController.getEntrys();
    }else{
      news = await this.entriesController.getEntrys(Number(limit));
    }
    return res.status(200).json(news);
  }

  public async getNewById(req: express.Request, res: express.Response) {
    //valid that the id is a number
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);

    const newFound = await this.entriesController.getEntryById(id);

    return res.status(200).json(newFound);
  }

  public async updateNew(req: express.Request, res: express.Response) {
    //valid that the id is a number
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    
    const newData = req.body
    const id = Number(req.params.id);
    
    const entry = await this.entriesController.getEntryById(id);
    if(req.files && req.files.length > 0){
      const imageName = entry.image.split('/').slice(-1)[0];
      this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.files[0]), NEWS_FILE_DESTINATION, imageName);
    }
    newData.image = entry.image;
    const updatedNew = await this.entriesController.updateEntryById(newData,id)

    return res.status(200).json(updatedNew);
  }

  public async deleteNewById(req: express.Request, res: express.Response) {
    //valid that the id is a number
    const error = validationResult(req);
    if (!error.isEmpty()) {
      throw new ExpressValidatorError(error.array());
    }

    const id = Number(req.params.id);

    const newFound = await this.entriesController.deleteEntryBiId(id);

    return res.status(200).json(NEWS_DELETED_SUCCESS);
  }

  private buildRoutes() {
    this.router.post(
      PATH_INICIAL,
      upload.single("imageFile"),
      createNewsValidations,
      this.createNews.bind(this)
    );
    this.router.get(PATH_INICIAL, this.getNews.bind(this));
    this.router.get(PATH_PARAM_ID, getByIdValidations, this.getNewById.bind(this));
    this.router.delete(
      PATH_PARAM_ID,
      getByIdValidations,
      this.deleteNewById.bind(this)
    );
    this.router.put(PATH_PARAM_ID,
      upload.array("imageFile", 1),
      getByIdValidations ,this.updateNew.bind(this))
  }
}
