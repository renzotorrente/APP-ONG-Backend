import { UserDTO } from "../models/dtos/UserDTO";
import { NOT_FOUND_USER_EMAIL, NOT_FOUND_USER, USER_LIST_EMPTY, NOT_FOUND_USER_ID } from "../constants/constants";
import { NotFoundError } from "../errors/NotFoundError";
import { User } from "../models/entities/User";
import { IUser } from "interface/IUser";

export class UserQuerys {

  public async getAllUsers(){

    const response = await User.findAll()
    if(!response) throw new NotFoundError(USER_LIST_EMPTY)
    return response

  }

  public async getUserByEmail(email: string): Promise<UserDTO> {
    const response = await User.findOne<User>({ where: { email: email } });
    if (!response) throw new NotFoundError(NOT_FOUND_USER_EMAIL);
    return new UserDTO(response);
  }

  public async getUserById(id:number):Promise<UserDTO> {
    const response = await User.findOne<User>({ 
      attributes: { exclude: ['password'] },
      where: { id: id } 
    });
    if (!response) throw new NotFoundError(NOT_FOUND_USER_ID);
    return new UserDTO(response);
  }

  public async createUserQuery(user: IUser): Promise<UserDTO> {
    const newUser = new User(user);
    const response = await newUser.save();
    return new UserDTO(response);
  }

  public async deleteUserQuery(id:string){
    
    const user = await User.findOne<User>({ where: { id } })

    if(!user){
      return NOT_FOUND_USER
    }

    user.destroy()
    
    return true

  }

  public async updateUserQuery(userUpdate , id: number): Promise<UserDTO> {
    const user = await User.findOne<User>({ where: { id: id } })

    if (!user) throw new NotFoundError(NOT_FOUND_USER_ID)

    user.firstName = userUpdate.firstName;
    user.lastName = userUpdate.lastName;
    user.role = userUpdate.role;

    await user.save();

    return user;
  }

  public async getAuthUserData(id: number) {
    const auth = await User.findOne<User>({
      where: { id: id },
    });
    console.log("Auth: ", auth);
    if (!auth) throw new NotFoundError("Usuario no encontrado");
    return auth;
  }
}
