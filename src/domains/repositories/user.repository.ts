import { UserModel } from '../model/user';
import { CreateUserDto } from 'src/presentation/user/dto/create-user.dto';

export interface UserRepositoryInterface {
  getAll(): Promise<UserModel[]>;
  create(user: CreateUserDto): Promise<UserModel>;
}
