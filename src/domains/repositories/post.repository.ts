import { PostModel } from '../model/post';
import { CreatePostDto } from 'src/presentation/post/dto/create-post.dto';

export interface postRepositoryInterface {
  getAll(): Promise<PostModel[]>;
  create(post: CreatePostDto): Promise<PostModel>;
  update(id: number, post: CreatePostDto): Promise<PostModel>;
}
