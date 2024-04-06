import { UserModel } from 'src/domains/model/user';
import { CreateUserDto } from 'src/presentation/user/dto/create-user.dto';
import { UserRepositoryInterface } from 'src/domains/repositories/user.repository';

export class CreateUserUseCases {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(user: CreateUserDto): Promise<UserModel> {
    return this.repository.create(user);
  }
}
