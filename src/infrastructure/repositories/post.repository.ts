import { Injectable } from '@nestjs/common';
import { postRepositoryInterface } from 'src/domains/repositories/post.repository';
import { CreatePostDto } from 'src/presentation/post/dto/create-post.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PostModel } from 'src/domains/model/post';

@Injectable()
export class postRepositoryOrm implements postRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  async getAll(): Promise<PostModel[]> {
    const posts = await this.prisma.post.findMany();
    return posts.map((post) => new PostModel(post));
  }
  async create(post: CreatePostDto): Promise<PostModel> {
    const newPost = await this.prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        userId: post.userId,
      },
    });
    return new PostModel(newPost);
  }

  async update(id: number, post: CreatePostDto): Promise<PostModel> {
    const updatePost = await this.prisma.post.update({
      where: {
        id: id,
      },
      data: post,
    });
    return new PostModel(updatePost);
  }
}
