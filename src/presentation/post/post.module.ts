import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/repositories/repository.module';
import { PostController } from './post.controller';
import { PostUseCaseProxyModule } from 'src/infrastructure/usecase-proxy/post-usecase-proxy.module';

@Module({
  imports: [RepositoriesModule, PostUseCaseProxyModule],
  controllers: [PostController],
})
export class PostModule {}
