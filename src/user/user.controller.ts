import { Controller, Get,Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('/auth')
export class UserController {
    @Post("/signup")
    signup(@Body() user: CreateUserDTO) {
        return user
    }
}
