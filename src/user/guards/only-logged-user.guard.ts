import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


/**
 * guard assume that userId property after signing in populate with something offen user id
 */
@Injectable()
export class OnlyLoggedUserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() ;
    if (request.session.userId) {

      return true;
    }
    return false 
  }
}
