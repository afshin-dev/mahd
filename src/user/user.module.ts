import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule {}
