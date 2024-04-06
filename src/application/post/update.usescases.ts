import { PostModel } from 'src/domains/model/post';
import { postRepositoryInterface } from 'src/domains/repositories/post.repository';
import { CreatePostDto } from 'src/presentation/post/dto/create-post.dto';

export class UpdateUseCases {
  constructor(private readonly repository: postRepositoryInterface) {}

  async execute(post: CreatePostDto): Promise<PostModel> {
    return this.repository.update(post);
  }
}
