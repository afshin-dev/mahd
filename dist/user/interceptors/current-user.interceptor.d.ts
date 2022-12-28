import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UserService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
