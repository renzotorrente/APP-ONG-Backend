import { TestimonialDTO } from '../models/dtos/TestimonialsDTO'
import { Testimonial } from '../models/entities/Testimonial'
import { ITestimonial } from '../interface/ITestimonial'
import { NOT_FOUND_TESTIMONIAL } from '../constants/constants'
import { NotFoundError } from '../errors/NotFoundError'

export class TestimonialQuerys {
  public async newTestimonial(
    testimonial: ITestimonial
  ): Promise<TestimonialDTO> {
    const newTestimonial = new Testimonial(testimonial)
    const response = await newTestimonial.save()
    return new TestimonialDTO(response)
  }
  public async updateTestimonial(
    testimonial: ITestimonial
  ): Promise<TestimonialDTO> {
    const testimonialToUpdate = await Testimonial.findOne<Testimonial>({
      where: { id: testimonial.id },
    })
    if (!testimonialToUpdate) throw new NotFoundError(NOT_FOUND_TESTIMONIAL)
    testimonialToUpdate.update({
      ...testimonial,
      updatedAt: new Date(Date.now()),
    })
    return new TestimonialDTO(testimonialToUpdate)
  }
 public async  deleteTestimonial(id:string){
  const testimonialdelete = await Testimonial.findOne({where: { id: id }, });
  if(!testimonialdelete)throw new NotFoundError(NOT_FOUND_TESTIMONIAL);
  testimonialdelete.destroy();
  return true;
}
  public async getAllTestimonialsQuery(){
    return await Testimonial.findAll();
  }
}