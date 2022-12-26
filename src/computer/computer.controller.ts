import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(public diskService: DiskService, public cpuService: CpuService){}

    @Get('')
    compute(): [number, number] {
        const writedBytes = this.diskService.copy(3000);
        const powerToFour  = this.cpuService.computeTo(4);
        return [writedBytes, powerToFour] ;
    }
}

