import { IUser } from "interface/IUser";
import { User } from "models";
import { UserQuerys } from "../querys/UserQuerys";

export class UserController {
  private query: UserQuerys;
  constructor() {
    this.query = new UserQuerys();
  }

  public async getAll(){

    const users = await this.query.getAllUsers()
    return users

  }

  public async findByEmail(email: string) {
    const user = await this.query.getUserByEmail(email);
    return user;
  }

  public async findById(id:number){
    const user = await this.query.getUserById(id);
    return user;
  }

  public async createUser(user: IUser) {
    const newUser = await this.query.createUserQuery(user);
    return newUser;
  }

  public async updateUser(userUpdate, id:number){
    const user = await this.query.updateUserQuery(userUpdate, id)
    return user;
  }

  public async deleteUser(id:string){
    const userToDelete = await this.query.deleteUserQuery(id)

    console.log('****'+userToDelete)

    return userToDelete;
  }
}
