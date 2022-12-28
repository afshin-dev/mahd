import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";


import {plainToInstance, plainToClass} from "class-transformer"
import { UserDTO } from 'src/user/dtos/user.dto';

@Injectable()
export class UserSerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log("1");
    
    return next.handle().pipe(map((data: any) => {
      // console.log("2");
      // console.dir(data);
      const x = plainToClass(UserDTO, data, {excludeExtraneousValues: true}) ;
      // console.log(x);
      return x ;
    }));

  }
}
