import { Injectable, Get } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(public powerService: PowerService){

    }

    computeTo(what: number): number {
        let power = this.powerService.suplly(1000)
        return power.watts * what ; 
    }
}
