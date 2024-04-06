import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domains/repositories/user.repository';
import { PrismaService } from '../prisma/prisma.service';
import { UserModel } from 'src/domains/model/user';
import { CreateUserDto } from '../../presentation/user/dto/create-user.dto';

@Injectable()
export class UserRepositoryOrm implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<UserModel[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserModel(user));
  }

  async create(user: CreateUserDto): Promise<UserModel> {
    const newUser = await this.prisma.user.create({
      data: { ...user },
    });
    return new UserModel(newUser);
  }
}
