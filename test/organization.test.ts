import { OrganizationController } from '../controllers/OrganizationController'
import {
  OrganizationRequest,
  OrganizationRequestUpdete,
  TestHelper,
  BASE_TEST_URL,
  PUBLIC,
  WELCOMETEXT,
} from './Organization.helpers'
import { Server } from '../server'
import * as http from 'http'
import request = require('supertest')
import { MESSAGE, NOT_FOUND_ORGANIZATION } from '../constants/constants'

let ServerTest: http.Server
let controller: OrganizationController

beforeAll(async () => {
  ServerTest = await TestHelper.InitializeServer()
  controller = new OrganizationController()
})

describe('Organization create , update and delete', () => {
  test(' create ', async () => {
    const request = await controller.createOrganization(OrganizationRequest)
    const request2 = await controller.createOrganization(OrganizationRequest)
    expect(request).toBeDefined()
    expect(request.welcomeText).toBe(OrganizationRequest.welcomeText)
    expect(request2.id).not.toBe(request.id)
    expect(request.deletedAt).toEqual(undefined)
    expect.assertions(4)
  })

  test(' update ', async () => {
    const request = await controller.updateOrganization(OrganizationRequestUpdete)
    expect(request).toBeDefined()
    expect(request.welcomeText).toBe(OrganizationRequestUpdete.welcomeText)
    expect.assertions(2)
  })

  test(' Soft delete ', async () => {
    const request = await controller.deleteOrganization(
      OrganizationRequestUpdete.id
    )
    expect(request).toBeDefined()
    expect(request.deletedAt).not.toEqual(undefined)
    expect.assertions(2)
  })
})

describe('get Organization', () => {
  test(' get Organization if exist', async () => {
    const idTestimonalToGet = 2
    const response = await request(Server.app).get(
      BASE_TEST_URL + idTestimonalToGet + PUBLIC
    )
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty(
      WELCOMETEXT,
      OrganizationRequest.welcomeText
    )
    expect.assertions(2)
  })

  test(' get Organization if not exist', async () => {
    const idTestimonalToGet = 50
    const response = await request(Server.app).get(
      BASE_TEST_URL + idTestimonalToGet + PUBLIC
    )
    expect(response.body).toHaveProperty(MESSAGE, NOT_FOUND_ORGANIZATION)
    expect.assertions(1)
  })
})

afterAll(() => {
  ServerTest.close()
})
