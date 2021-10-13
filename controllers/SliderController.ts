import { SliderQuerys } from "../querys/SliderQuerys";

export class SliderController {
  private query: SliderQuerys
  
  constructor() {
    this.query = new SliderQuerys();
  }

  public async getSliders(){
    return await this.query.getSliders();
  }

  public async getSliderById(id:number) {
    return await this.query.getSliderById(id);
  }

  public async updateSlider(slider, id) {
    const updatedSlider = await this.query.updateSlider(id, slider);
    return updatedSlider
  }


}