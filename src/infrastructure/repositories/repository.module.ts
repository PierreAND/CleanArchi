import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepositoryOrm } from './user.repository';

@Module({
  imports: [PrismaModule],
  providers: [UserRepositoryOrm],
  exports: [UserRepositoryOrm],
})
export class RepositoriesModule {}
