import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';


  /**
   * Pre interceptor for populate currentUser property to incomming http request object
  */
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {

  constructor(private userService: UserService) {}
  async intercept(context: ExecutionContext, next: CallHandler):  Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest() ;
    const userId = req.session.userId ; 

    if (!userId) {
      return next.handle()
    }
    
    const currentUser = await this.userService.findOne(parseInt(userId))
    req.currentUser = currentUser 

    // console.log(currentUser)
    
    return next.handle() 
    
  }
}
