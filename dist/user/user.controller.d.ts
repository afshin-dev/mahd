import { AuthService } from './auth/auth.service';
import { UserCredentialDTO } from './dtos/user-credential.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    userService: UserService;
    authService: AuthService;
    constructor(userService: UserService, authService: AuthService);
    me(user: any): any;
    signup(user: UserCredentialDTO, session: any): Promise<import("./user.entity").User>;
    signin(user: UserCredentialDTO, session: any): Promise<import("./user.entity").User>;
    signout(session: any): void;
    getOne(id: string): Promise<import("./user.entity").User> | "id not a number";
    all(email: string): any[] | Promise<import("./user.entity").User[]>;
    delete(id: string): Promise<import("./user.entity").User> | "id not a number";
    update(id: string, userInfo: UpdateUserDTO): Promise<import("./user.entity").User> | "id not a number";
}
