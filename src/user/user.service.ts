import { Injectable } from '@nestjs/common';
import {Repository, FindOneOptions} from 'typeorm'
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

    async findOne(id: number){
        return await this.repo.findOne({where: {id}})
    }
    async find(email: string){
        return await this.repo.find({where: {email}})
    }
    async update(id: number , attrs : Partial<User>){
        const user = await this.repo.findOne({where: { id : id}});

        if (!user) {
            throw new Error("user not found");
        }
        
        for(let key in attrs) {
            user[key] = attrs[key]
        }

        return await this.repo.save(user)

    }
    async remove(id: number){
        const user = await this.repo.findOne({where: { id}})
        if (!user) {
            throw new Error("user not found");
        }
        return await this.repo.remove(user) 
    }
}


