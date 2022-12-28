import { Controller, Get,Post, Body, Patch, Query, Param, Delete, UseInterceptors, Session , UseGuards} from '@nestjs/common';
import { UserSerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth/auth.service';
import { UserCredentialDTO } from './dtos/user-credential.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { CurrentUser } from './decoratores/current-user';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { OnlyLoggedUserGuard } from './guards/only-logged-user.guard';

@Controller('/auth')
export class UserController {
    /**
     *
     */
    constructor(public userService: UserService, public authService: AuthService) {
        
    }

    @Get('/users/me')
    @UseInterceptors(CurrentUserInterceptor)
    @UseGuards(OnlyLoggedUserGuard)
    public me(@CurrentUser() user: any) {
        return user ;
    }

    @Post("/signup")
    async signup(@Body() user: UserCredentialDTO, @Session() session : any) {
        // return this.userService.create(user.email, user.password) ;
        const usr = await  this.authService.signup(user.email, user.password) ;
        session.userId = usr.id ;
        return usr ;
    }

    @Post("/signin")
    async signin(@Body() user: UserCredentialDTO, @Session() session : any) {
        const usr = await this.authService.signin(user.email, user.password)
        session.userId = usr.id 
        return usr 
    }

    @Post("/signout")
    signout(@Session() session: any){
        session.userId = null ;
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
