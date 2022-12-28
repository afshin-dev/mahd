import {
    createParamDecorator,
    ExecutionContext, 
} from '@nestjs/common'


/**
 * parameter decorator for extracting currentUser from incomming http request object
 * and you should use it after execution of CurrentUserInterceptor interceptor
 */
export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => {
        // console.log("dec");
        
        return context.switchToHttp().getRequest().currentUser;
    }
)
