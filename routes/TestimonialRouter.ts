import {
  BAD_REQUEST,
  CONTENT,
  NAME,
  PATH_INICIAL,
  PATH_PARAM_ID,
} from '../constants/constants'
import { TestimonialController } from '../controllers/TestimonialController'
import { Request, Response } from 'express'
import { BaseRouter } from './BaseRouter'


export class TestimonialRouter extends BaseRouter {
  private TestimonialController: TestimonialController

  constructor() {
    super()
    this.TestimonialController = new TestimonialController()
    this.buildRoutes()
  }

  private async createNewTestimonial(req: Request, res: Response) {
    const testimonial = req.body
    if (testimonial && CONTENT in testimonial && NAME in testimonial) {
      const Response = await this.TestimonialController.createTestimonials(
        testimonial
      )
      return res.status(201).send(Response)
    }
    res.status(400).send({
      message: BAD_REQUEST,
    })
  }
  private async updateTestimonial(req: Request, res: Response) {
    const testimonial = req.body
    const { id } = req.params
    const Response = await this.TestimonialController.updateTestimonials({
      ...testimonial,
      id,
    })
    res.status(200).send(Response)
  }

  private async deleteTestimonial(req, res){
  const id = req.params.id;
  const response = await this.TestimonialController.deleteTestimonial(id);
  return res.status(200).json({response});
  }

  public async getTestimonials(req, res){
    const testimonials = await this.TestimonialController.getAllTestimonials();

    return res.json(testimonials)
  }

  private buildRoutes() {
    this.router.get(PATH_INICIAL, this.getTestimonials.bind(this))
    this.router.post(PATH_INICIAL, this.createNewTestimonial.bind(this))
    this.router.put(PATH_PARAM_ID, this.updateTestimonial.bind(this))
    this.router.delete(PATH_PARAM_ID, this.deleteTestimonial.bind(this))
  }
}
