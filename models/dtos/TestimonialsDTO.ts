import { Testimonial } from "models/entities/Testimonial"

export class TestimonialDTO {
    public id?: number
    public name: string
    public content: string
    public image: string
    public createdAt?: Date
    public updatedAt?: Date
    public deletedAt?: Date
    constructor(testimonial: Testimonial){
        this.id = testimonial.id;
        this.name = testimonial.name;
        this.content = testimonial.content;
        this.image = testimonial.image;
        this.createdAt = testimonial.createdAt
        this.updatedAt = testimonial.updatedAt
        this.deletedAt = testimonial.deletedAt
    }
}