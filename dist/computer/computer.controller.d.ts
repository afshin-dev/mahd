import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
export declare class ComputerController {
    diskService: DiskService;
    cpuService: CpuService;
    constructor(diskService: DiskService, cpuService: CpuService);
    compute(): [number, number];
}
