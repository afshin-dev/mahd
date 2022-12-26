import { Injectable, Get } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(public powerService: PowerService){}
    @Get("")
    copy(byte: number): number {
        let power = this.powerService.suplly(200);
        console.log("Disk:>>>");
        console.log(`copied ${byte} bytes`);
        return byte
        
    }
}
