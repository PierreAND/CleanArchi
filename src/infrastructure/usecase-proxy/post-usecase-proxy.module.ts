import { CreateUsesCasesPost } from 'src/application/post/create.usecases';
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
      provide: 'GetAllPostsUseCases',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new GetAllPostsUseCases(postRepository)),
    },
    {
      inject: [postRepositoryOrm],
      provide: 'CreateUseCasesPost',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new CreateUsesCasesPost(postRepository)),
    },
    {
      inject: [postRepositoryOrm],
      provide: 'UpdateUseCases',
      useFactory: (postRepository: postRepositoryOrm) =>
        new UseCaseProxy(new UpdateUseCases(postRepository)),
    },
  ],
  exports: ['UpdateUseCases', 'CreateUseCasesPost', 'GetAllPostUseCases'],
})
export class PostUseCaseProxyModule {}
