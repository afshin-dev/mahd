import { Controller, Get,Post, Body, Patch, Query, Param } from '@nestjs/common';
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

    @Get("/:id")
    getOne(@Param('id') id: string){
            const NumberId = parseInt(id);
            if (isNaN(NumberId)) {
                return "id not a number";
            }
            return this.userService.findOne(NumberId);
    }

}
