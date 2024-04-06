import { Body, Controller, Get, Post, Inject } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/infrastructure/entities/user.entity';
import { UseCaseProxy } from 'src/infrastructure/usecase-proxy/usecase-proxy';
import { GetAllUsersUseCases } from 'src/application/user/getAll.usecases';
import { CreateUserUseCases } from 'src/application/user/create.usecases';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(
    @Inject('getAllUsersUsecaseProxy')
    private readonly getAllUsersUsecaseProxy: UseCaseProxy<GetAllUsersUseCases>,
    @Inject('createUserUsecaseProxy')
    private readonly createUserUsecaseProxy: UseCaseProxy<CreateUserUseCases>,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Liste des utilisateurs',
    type: UserEntity,
    isArray: true,
  })
  async getAllUsers(): Promise<UserEntity[]> {
    return this.getAllUsersUsecaseProxy.getInstance().execute();
  }

  @Post('create')
  @ApiOkResponse({ description: 'Créer un utilisateur', type: UserEntity })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.createUserUsecaseProxy.getInstance().execute(createUserDto);
  }
}
