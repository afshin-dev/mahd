import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm'
import {InjectRepository} from "@nestjs/typeorm"
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) public repo: Repository<User>) {

    }

    public create(email: string, password: string){
        const user = this.repo.create({email, password});

        return this.repo.save(user) ;
    }

    findOne(){}
    find(){}
    update(){

    }
    remove(){}
}
