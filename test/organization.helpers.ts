import { Server } from '../server'
export const WELCOMETEXT = 'welcomeText'
export const BASE_TEST_URL = '/api/organizations/'
export const PUBLIC = '/public'
export const OrganizationRequest = {
  name: 'bernal hosking',
  phone: '+542315434345',
  address: 'termianl terminadonde termina',
  welcomeText: 'texto super largo pero no tan largo',
  image: 'http://www.google.com',
  facebookUrl: 'http://www.facebook.com',
  linkedInUrl: 'http://www.linkedin.com',
  instagramUrl: 'http://www.instagram.com',
}
export const OrganizationRequestUpdete = {
  id: 1,
  name: 'update',
  phone: 'update',
  address: 'update',
  welcomeText: 'update',
  image: 'update',
}

export class TestHelper {
  static async InitializeServer() {
    return await Server.initializeApp()
  }
}
