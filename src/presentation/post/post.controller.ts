import { Controller, Post, Get, Body, Inject } from '@nestjs/common';
import { PostEntity } from 'src/infrastructure/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { GetAllPostsUseCases } from 'src/application/post/getAll.usecases';
import { UpdateUseCases } from 'src/application/post/update.usescases';
import { CreatePostUseCases } from 'src/application/post/create.usecases';
import { UseCaseProxy } from 'src/infrastructure/usecase-proxy/usecase-proxy';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('api')
@Controller('post')
export class PostController {
  constructor(
    @Inject('GetAllPostsUseCasesProxy')
    private readonly GetAllPostsUseCasesProxy: UseCaseProxy<GetAllPostsUseCases>,
    @Inject('CreatePostUseCasesProxy')
    private readonly CreatePostUseCasesProxy: UseCaseProxy<CreatePostUseCases>,
    @Inject('UpdateUseCasesProxy')
    private readonly UpdateUseCasesProxy: UseCaseProxy<UpdateUseCases>,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Liste des posts',
    type: PostEntity,
    isArray: true,
  })
  async getAllPosts(): Promise<PostEntity[]> {
    return this.GetAllPostsUseCasesProxy.getInstance().execute();
  }

  @Post('create')
  @ApiOkResponse({
    description: 'Créer un post',
    type: PostEntity,
  })
  async createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.CreatePostUseCasesProxy.getInstance().execute(createPostDto);
  }
}
