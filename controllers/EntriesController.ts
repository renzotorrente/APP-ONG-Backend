import { NotFoundError } from "../errors/NotFoundError";
import { IEntry } from "../interface/IEntry";
import { EntryQuerys } from "../querys/EntryQuerys";

export class EntriesController {
  private query: EntryQuerys;
  constructor() {
    this.query = new EntryQuerys();
  }

  public async createEntry(entry: IEntry) {
    const newEntry = await this.query.createEntryQuery(entry);
    return newEntry;
  }

  public async updateEntryById(entry: IEntry , id:number ){
    const updatedEntry = await this.query.updateEntryQuery(entry,id)
    return updatedEntry

  }

  public async getEntrys(limit: number = 50, offset: number = 0) {
    console.log(limit)
    const entries = await this.query.getEntrysQuery(limit, offset);
    return entries;
  }

  public async getEntryById(id: number) {
    const newFound = await this.query.getEntryByIdQuery(id);
    return newFound;
  }

  public async deleteEntryBiId(id: number) {
    const newFound = this.getEntryById(id);
    if ((await newFound).type === "news") {
      const deleted = await this.query.deleteEntryByIdQuery(id);
      return deleted;
    } else {
      throw new NotFoundError("Invalid new ID");
    }
  }
}
