import { Sequelize } from 'sequelize-typescript'
import { User } from './entities/User'
import { Contacts } from './entities/Contacts'
import { Organization } from './entities/Organization'
import { Slider } from './entities/Slider'
import { DEVELOPMENTMODE, TEST } from '../constants/constants'
import { Entry } from './entities/Entry'
import { Category } from './entities/Category'
import { Activity } from './entities/Activity'
import { Testimonial } from './entities/Testimonial'
import { Members } from './entities/Members'


export class Models {
  public sequelize: Sequelize
  constructor(config: any) {
    this.sequelize = new Sequelize(config)
  }

  public initModels() {
    this.sequelize.addModels(this.getModels())
    return this.sequelize.sync({
      force: process.env.NODE_ENV === TEST,
      alter: false && process.env.NODE_ENV === DEVELOPMENTMODE,
    })
  }

  private getModels() {
    return [User, Contacts, Organization, Slider, Category, Entry, Activity, Testimonial, Members]
  }
}

export { Sequelize, User, Organization, Slider, Category, Contacts, Members }
