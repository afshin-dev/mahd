import { Injectable } from '@nestjs/common';


type Power = {
    watts: number ;
}
@Injectable()
export class PowerService {
    suplly(watts: number): Power {
        return { watts  }
    }
}
