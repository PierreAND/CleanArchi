import { PostModel } from 'src/domains/model/post';
import { postRepositoryInterface } from 'src/domains/repositories/post.repository';

export class GetAllPostsUseCases {
  constructor(private postsRepository: postRepositoryInterface) {}

  async execute(): Promise<PostModel[]> {
    return this.postsRepository.getAll();
  }
}
