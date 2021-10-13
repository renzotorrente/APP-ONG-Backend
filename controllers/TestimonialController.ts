import { TestimonialQuerys } from '../querys/TestimonialQuerys'
import { ITestimonial } from '../interface/ITestimonial'

export class TestimonialController {
  private Query: TestimonialQuerys

  constructor() {
    this.Query = new TestimonialQuerys()
  }

  public async getAllTestimonials(){
    return await this.Query.getAllTestimonialsQuery();
  }

  public async createTestimonials(testimonial: ITestimonial) {
    return await this.Query.newTestimonial(testimonial)
  }

  public async updateTestimonials(testimonial: ITestimonial) {
    return await this.Query.updateTestimonial(testimonial)
  }
  public async deleteTestimonial(id:string){
    return await this.Query.deleteTestimonial(id);
  }
}
