import { DatabaseError } from "../errors/DatabaseError";
import { NOT_FOUND_ACTIVITY } from "../constants/constants";
import { NotFoundError } from "../errors/NotFoundError";
import { IActivity } from "../interface/IActivity";
import { ActivityDTO } from "../models/dtos/ActivitiesDTO";
import { Activity } from "../models/entities/Activity";


export class ActivityQuerys {

    public async getAllActivitiesQuery(){
      try {
        const activities = await Activity.findAll();

        return activities;

      } catch (error) {
        throw new DatabaseError(error);
      }
    }

    public async getActivityById(id:number){
      const activity = await Activity.findOne({where: { id }});
      if(!activity)throw new NotFoundError(NOT_FOUND_ACTIVITY);

      return activity;
    }

    public async createActivityQuery (activity: IActivity): Promise<ActivityDTO> {
      try{
        const newActivity = new Activity(activity);
        const response = await newActivity.save();
        return response;
      } catch( error ){
        throw new DatabaseError(error);
      }
      
    }

    public async  deleteActivityQuery(id:string){
      const activitydelete = await Activity.findOne({where: { id: id }, });
      if(!activitydelete)throw new NotFoundError(NOT_FOUND_ACTIVITY);
      activitydelete.destroy();
      return true;
    }

    public async updateActivityQuery (id: number, activity: IActivity): Promise<ActivityDTO> {
        const activityDB = await Activity.findOne({where:{id:id}});

        if(!activityDB){
          throw new NotFoundError(NOT_FOUND_ACTIVITY)
        }

        activityDB.name = activity.name;
        activityDB.content = activity.content;
        if( activity.image !== undefined ){
          activityDB.image = activity.image;
        }
        
        activityDB.save();

        return activityDB;

    }
}