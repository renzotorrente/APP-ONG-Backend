import * as express from 'express'
import { UserRouter } from './UserRouter'
import path = require('path')
import { OrganizationRouter } from './OrganizationRouter'
import { Auth } from './Auth'
import { NewsRouter } from './NewsRouter'
import {
  BASE_URL_API,
  EXPRESS,
  INDEX,
  ORGANIZATIONS,
  PATH_INICIAL,
  STATIC_PUBLIC_PATH,
  USERS,
  AUTH,
  NEWS,
  ACTIVITIES,
  TESTIMONIAL,
  CONTACTS,
  CATEGORIES,
  MEMBERS,
  SLIDERS
} from '../constants/constants'
import { checkToken, checkAdmin } from './middleware'
import { ActivitiesRouter } from './ActivitiesRouter'
import { TestimonialRouter } from './TestimonialRouter'
import { ContactRouter } from './ContactRouter'
import { CategoryRouter } from './CategoryRouter'
import { MemberRouter } from './MemberRouter'
import { SliderRouter } from './SliderRouter'

export class Router {
  public static initializeRoutes(app: express.Express) {
    app.use(BASE_URL_API + ORGANIZATIONS, new OrganizationRouter().router)
    app.use(BASE_URL_API + USERS, new UserRouter().router)
    app.use(BASE_URL_API + AUTH, new Auth().router)
    app.use(BASE_URL_API + NEWS, new NewsRouter().router)
    app.use(BASE_URL_API + ACTIVITIES, new ActivitiesRouter().router)
    app.use(BASE_URL_API + TESTIMONIAL, new TestimonialRouter().router)
    app.use(BASE_URL_API + CONTACTS, new ContactRouter().router)
    app.use(BASE_URL_API + CATEGORIES, new CategoryRouter().router)
    app.use(BASE_URL_API + MEMBERS, new MemberRouter().router)
    app.use(BASE_URL_API + SLIDERS , new SliderRouter().router)
    app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
    app.get(PATH_INICIAL, (_, res) => res.render(INDEX, { title: EXPRESS }))
  }
}
