import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepositoryOrm } from './user.repository';
import { postRepositoryOrm } from './post.repository';

@Module({
  imports: [PrismaModule],
  providers: [UserRepositoryOrm, postRepositoryOrm],
  exports: [UserRepositoryOrm, postRepositoryOrm],
})
export class RepositoriesModule {}
