import { Module } from '@nestjs/common';
import { UserModule } from './presentation/user/user.module';
import { PostModule } from './presentation/post/post.module';

@Module({
  imports: [UserModule, PostModule],
})
export class AppModule {}
