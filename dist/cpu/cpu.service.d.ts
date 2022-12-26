import { PowerService } from 'src/power/power.service';
export declare class CpuService {
    powerService: PowerService;
    constructor(powerService: PowerService);
    computeTo(what: number): number;
}
