import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserService } from '../user.service';
import { scrypt as _scrypt , randomBytes } from 'crypto';
import {promisify} from 'util'
import e from 'express';

const scrypt = promisify(_scrypt) ;

@Injectable()
export class AuthService {
    /**
     *
     */
    constructor(private userService: UserService) {}
    async signup(email: string, password: string){
        let users = await  this.userService.find(email) ;
        if (users.length) {
            throw new BadRequestException("unsuccessfull signup") 
        }

        const salt = randomBytes(8).toString('hex') ;
        const hashedPassword = await scrypt(password, salt, 32) as Buffer;
        const saltedHashedPassword = `${hashedPassword.toString('hex')}.${salt}` ;

        const user = await this.userService.create(email, saltedHashedPassword) ;

        return user ;

    }

    async signin(email: string, password: string){
        const [user] = await this.userService.find(email)
        if (!user) {
            throw new NotFoundException("user not found")
        }
        const [hash, salt] = user.password.split('.') 

        const hashedPassword = await scrypt(password, salt, 32) as Buffer ;

        if (hash !== hashedPassword.toString('hex')) {
            throw new BadRequestException("credential incorrect")
        }

        return user 

    }
}
