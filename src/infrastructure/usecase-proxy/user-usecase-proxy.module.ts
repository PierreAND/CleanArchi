import { Module } from '@nestjs/common';
import { CreateUserUseCases } from 'src/application/user/create.usecases';
import { GetAllUsersUseCases } from 'src/application/user/getAll.usecases';
import { RepositoriesModule } from '../repositories/repository.module';
import { UseCaseProxy } from './usecase-proxy';
import { UserRepositoryOrm } from '../repositories/user.repository';

@Module({
  imports: [RepositoriesModule],
  providers: [
    {
      inject: [UserRepositoryOrm],
      provide: 'getAllUsersUsecaseProxy',
      useFactory: (postRepository: UserRepositoryOrm) =>
        new UseCaseProxy(new GetAllUsersUseCases(postRepository)),
    },
    {
      inject: [UserRepositoryOrm],
      provide: 'createUserUsecaseProxy',
      useFactory: (postRepository: UserRepositoryOrm) =>
        new UseCaseProxy(new CreateUserUseCases(postRepository)),
    },
  ],
  exports: ['getAllUsersUsecaseProxy', 'createUserUsecaseProxy'],
})
export class UserUsecaseProxyModule {}
