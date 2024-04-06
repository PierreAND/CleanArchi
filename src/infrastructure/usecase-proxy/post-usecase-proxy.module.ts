import { CreatePostUseCases } from 'src/application/post/create.usecases';
import { GetAllPostsUseCases } from 'src/application/post/getAll.usecases';
import { UpdateUseCases } from 'src/application/post/update.usescases';
import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repository.module';
import { UseCaseProxy } from './usecase-proxy';
import { postRepositoryOrm } from '../repositories/post.repository';

@Module({
  imports: [RepositoriesModule],
  providers: [
    {
      inject: [postRepositoryOrm],
      provide: 'GetAllPostsUseCasesProxy',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new GetAllPostsUseCases(postRepository)),
    },
    {
      inject: [postRepositoryOrm],
      provide: 'CreatePostUseCasesProxy',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new CreatePostUseCases(postRepository)),
    },
    {
      inject: [postRepositoryOrm],
      provide: 'UpdateUseCasesProxy',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new UpdateUseCases(postRepository)),
    },
  ],
  exports: [
    'GetAllPostsUseCasesProxy',
    'CreatePostUseCasesProxy',
    'UpdateUseCasesProxy',
  ],
})
export class PostUseCaseProxyModule {}
