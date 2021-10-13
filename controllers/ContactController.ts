import { ContactDTO } from 'models/dtos/ContactsDTO';
import { ContactQuerys } from '../querys/ContactQuerys'

export class ContactController {
  private query: ContactQuerys

  constructor() {
    this.query = new ContactQuerys()
  }

  public async getAll() {
    const newEntry = await this.query.getAllContacts();
    return newEntry
  }

  public async CreateNew(Data:ContactDTO){
    const newContact = await this.query.createContact(Data)
    return newContact
  }

  public async getContactById(id:number){
    const contact = await this.query.getContactById(id);
    return contact;
  }
}
