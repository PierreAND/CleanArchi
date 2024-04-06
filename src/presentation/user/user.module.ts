import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { RepositoriesModule } from 'src/infrastructure/repositories/repository.module';
import { UserUsecaseProxyModule } from 'src/infrastructure/usecase-proxy/user-usecase-proxy.module';
@Module({
  imports: [RepositoriesModule, UserUsecaseProxyModule],
  controllers: [UserController],
})
export class UserModule {}
