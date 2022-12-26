import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    userService: UserService;
    constructor(userService: UserService);
    signup(user: CreateUserDTO): Promise<import("./user.entity").User>;
}
