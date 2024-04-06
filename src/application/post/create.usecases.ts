import { PostModel } from 'src/domains/model/post';
import { CreatePostDto } from 'src/presentation/post/dto/create-post.dto';
import { postRepositoryInterface } from 'src/domains/repositories/post.repository';

export class CreateUsesCasesPost {
  constructor(private readonly repository: postRepositoryInterface) {}

  async execute(post: CreatePostDto): Promise<PostModel> {
    return this.repository.create(post);
  }
}
