import { UserModel } from 'src/domains/model/user';
import { UserRepositoryInterface } from 'src/domains/repositories/user.repository';

export class GetAllUsersUseCases {
  constructor(private usersRepository: UserRepositoryInterface) {}

  async execute(): Promise<UserModel[]> {
    return this.usersRepository.getAll();
  }
}
