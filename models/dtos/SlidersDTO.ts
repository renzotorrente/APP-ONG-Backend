import { Slider } from '../entities/Slider'

export class SliderDTO {
  public id?: number
  public text: string
  public order: number
  public organizationId: number
  public image: string
  constructor(slider: Slider) {
    this.id = slider.id
    this.text = slider.text
    this.order = slider.order
    this.organizationId = slider.organizationId
    this.image = slider.imageUrl
  }
}
