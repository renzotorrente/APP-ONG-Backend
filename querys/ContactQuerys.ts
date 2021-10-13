import { NOT_FOUND_CONTACT } from "../constants/constants";
import { NotFoundError } from "../errors/NotFoundError";
import { ContactDTO } from "../models/dtos/ContactsDTO";
import { Contacts } from "../models/entities/Contacts";

export class ContactQuerys {

  public async getAllContacts():Promise<ContactDTO[]> {
    const contacts = await Contacts.findAll();
    return contacts.map((contact) => new ContactDTO(contact));
  }

  public async createContact(contact: ContactDTO):Promise<ContactDTO>{
    const newContact = new Contacts(contact)
    const response = await newContact.save()
    return new ContactDTO(response)
  }

  public async getContactById(id:number){
    const contact = await Contacts.findOne({ where: {id} });
    if (!contact) throw new NotFoundError(NOT_FOUND_CONTACT);

    return contact;
  }

}
