"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cpu_module_1 = require("../cpu/cpu.module");
const disk_module_1 = require("../disk/disk.module");
const report_entity_1 = require("../report/report.entity");
const user_entity_1 = require("../user/user.entity");
const user_module_1 = require("../user/user.module");
const computer_controller_1 = require("./computer.controller");
let ComputerModule = class ComputerModule {
};
ComputerModule = __decorate([
    (0, common_1.Module)({
        controllers: [computer_controller_1.ComputerController],
        imports: [user_module_1.UserModule, disk_module_1.DiskModule, cpu_module_1.CpuModule, typeorm_1.TypeOrmModule.forRoot({
                type: "sqlite",
                database: "mahd.sqlite",
                entities: [user_entity_1.User, report_entity_1.Report],
                synchronize: true,
            })]
    })
], ComputerModule);
exports.ComputerModule = ComputerModule;
//# sourceMappingURL=computer.module.js.map