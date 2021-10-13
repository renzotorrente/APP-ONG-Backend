
import { IActivity } from '../interface/IActivity'
import { ActivityQuerys } from '../querys/ActivityQuerys'

export class ActivitiesController {
  private query: ActivityQuerys

  constructor() {
    this.query = new ActivityQuerys()
  }

  public async getActivities(){
    return await this.query.getAllActivitiesQuery();
  }

  public async deleteActivity(id:string){
    return await this.query.deleteActivityQuery(id);
  }

  public async getActivityById(id:number){
    return await this.query.getActivityById(id);
  }

  public async createActivity(entry: IActivity) {
    const newEntry = await this.query.createActivityQuery(entry)
    return newEntry
  }

  public async updateActivity(id:number, activity: IActivity){
    const updateActivity = await this.query.updateActivityQuery(id, activity);

    return updateActivity;
  }
}
