import { NotFoundError } from "../errors/NotFoundError";
import { DatabaseError } from "../errors/DatabaseError";
import { Slider } from "../models/entities/Slider";
import { SliderDTO } from "../models/dtos/SlidersDTO";
import { NOT_FOUND_SLIDER } from "../constants/constants";

export class SliderQuerys {
  public async getSliders() {
    try {
      const sliders = await Slider.findAll();
      return sliders;
    } catch (error) {
      throw new DatabaseError(error);
    }
  }

  public async getSliderById(id:number) {
    const slider = await Slider.findOne({where: { id }});
      if(!slider)throw new NotFoundError(NOT_FOUND_SLIDER);
      return new SliderDTO(slider);
  }

  public async updateSlider(id, slider) {
    const sliderDB = await Slider.findOne({where:{id:id}});

    if(!sliderDB){
      throw new NotFoundError(NOT_FOUND_SLIDER)
    }

    sliderDB.text = slider.text;
    if( slider.image !== undefined ){
      sliderDB.imageUrl = slider.image;
    }
    
    sliderDB.save();

    return sliderDB;
  }
  
}