import { Controller, Get,Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('/auth')
export class UserController {
    /**
     *
     */
    constructor(public userService: UserService) {
        
    }
    @Post("/signup")
    signup(@Body() user: CreateUserDTO) {
        return this.userService.create(user.email, user.password) ;
    }
}
