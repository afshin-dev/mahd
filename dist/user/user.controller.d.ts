import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    userService: UserService;
    constructor(userService: UserService);
    signup(user: CreateUserDTO): Promise<import("./user.entity").User>;
    getOne(id: string): Promise<import("./user.entity").User> | "id not a number";
    all(email: string): any[] | Promise<import("./user.entity").User[]>;
    delete(id: string): Promise<import("./user.entity").User> | "id not a number";
}
