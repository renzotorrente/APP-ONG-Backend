import { EntryDTO } from "../models/dtos/EntriesDTO";
import { Entry } from "../models/entities/Entry";
import { IEntry } from "../interface/IEntry";
import { NOT_FOUND_NEW } from "../constants/constants";
import { NotFoundError } from "../errors/NotFoundError";

export class EntryQuerys {
  public async createEntryQuery(entry: IEntry): Promise<EntryDTO> {
    const newEntry = new Entry(entry);
    const response = await newEntry.save();
    return new EntryDTO(response);
  }

  public async entryExist(id:number){
    const response = await Entry.findOne<Entry>({ where: { id: id } });
    return response
  }

  public async getEntryByIdQuery(id: number): Promise<EntryDTO> {
    const entry = await Entry.findOne<Entry>({ where: { id: id } });
    if (!entry) throw new NotFoundError(NOT_FOUND_NEW);
    return entry;
  }

  public async deleteEntryByIdQuery(id: number): Promise<any> {
    const entry = await Entry.destroy<Entry>({ where: { id: id } });
    if (!entry) throw new NotFoundError(NOT_FOUND_NEW);
    return entry;
  }

  public async getEntrysQuery(
    limit?: number,
    offset?: number
  ): Promise<EntryDTO[]> {
    const response = await Entry.findAll({ limit: limit, offset: offset });
    return response.map((entry) => new EntryDTO(entry));
  }

  public async updateEntryQuery(entry: IEntry, id:number){
    const updatedEntry = await this.entryExist(id);

    if(!updatedEntry){
      return {error: NOT_FOUND_NEW}
    }

    const response = await updatedEntry.update(entry);

    console.log(response)

    return new EntryDTO(response);
  }
}
