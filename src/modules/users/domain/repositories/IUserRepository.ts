import { IUser } from "../models/IUser";
import { IUserCreate } from "../models/IUserCreate";

export interface IUserRepository {
  create(data: IUserCreate): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
}
