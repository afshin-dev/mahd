import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    repo: Repository<User>;
    constructor(repo: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findOne(): void;
    find(): void;
    update(): void;
    remove(): void;
}
