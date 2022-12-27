import { Controller, Get,Post, Body, Patch, Query, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UserSerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth/auth.service';
import { UserCredentialDTO } from './dtos/user-credential.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('/auth')
export class UserController {
    /**
     *
     */
    constructor(public userService: UserService, public authService: AuthService) {
        
    }
    @Post("/signup")
    signup(@Body() user: UserCredentialDTO) {
        // return this.userService.create(user.email, user.password) ;
        return this.authService.signup(user.email, user.password) ;
    }

    @Post("/signin")
    gignin(@Body() user: UserCredentialDTO) {
        return this.authService.signin(user.email, user.password)
    }

    @Get("/:id")
    @UseInterceptors(UserSerializeInterceptor)
    getOne(@Param('id') id: string){
            // console.log("1.5");
            
            const NumberId = parseInt(id);
            if (isNaN(NumberId)) {
                return "id not a number";
            }
            return this.userService.findOne(NumberId);
    }

    @Get('')
    all(@Query('email') email: string) {
        if (!email) {
            return []
        }
        return this.userService.find(email) ;
    }

    @Delete('/:id')
    delete(@Param('id') id : string){
        const NumberId = parseInt(id) ;
        if (isNaN(NumberId)) {
            return "id not a number"
            
        }
        return this.userService.remove(NumberId) ;
    }
    @Patch("/:id")
    update(@Param('id') id: string, @Body() userInfo: UpdateUserDTO) {
        let NumberId = parseInt(id) ;
        if ( isNaN(NumberId) ) {
            return "id not a number"
        }
        return this.userService.update(NumberId, userInfo) 
    }
}
