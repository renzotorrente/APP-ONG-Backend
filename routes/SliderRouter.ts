import { PATH_INICIAL, SLIDER_FILE_DESTINATION } from '../constants/constants';
import { S3Controller } from '../controllers/S3controller';
import { SliderController } from '../controllers/SliderController';
import express = require('express');
import { getByIdValidations } from '../expressValidations/newsValidations';
import {BaseRouter} from './BaseRouter'
import { upload } from './middleware/multer';

export class SliderRouter extends BaseRouter {
  private sliderController: SliderController;
  private s3Controller: S3Controller;

  constructor() {
    super();
    this.sliderController = new SliderController();
    this.s3Controller = new S3Controller();
    this.buildRoutes();
  }

  public async getSliders(_: express.Request, res: express.Response) {
    const news = await this.sliderController.getSliders();
    return res.status(200).json(news);
  }

  public async editSliders(req: express.Request, res: express.Response) {

    const sliderData = req.body
    const id = Number(req.params.id);
    
    const slider = await this.sliderController.getSliderById(id);
    if(req.files && req.files.length > 0){
      const imageName = slider.image.split('/').slice(-1)[0];
      this.s3Controller.uploadFile(this.s3Controller.fileToBase64(req.files[0]), SLIDER_FILE_DESTINATION, imageName);
    }
    sliderData.image = slider.image;
    const updatedSlider = await this.sliderController.updateSlider(sliderData,id)

    return res.status(200).json(updatedSlider);
  }

  private buildRoutes() {
    this.router.get(PATH_INICIAL, this.getSliders.bind(this))
    this.router.put(PATH_INICIAL + ":id",upload.array("imageFile", 1) ,getByIdValidations, this.editSliders.bind(this))
  }

}