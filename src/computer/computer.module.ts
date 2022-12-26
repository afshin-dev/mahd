import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { Report } from 'src/report/report.entity';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController], 
  imports : [ UserModule,DiskModule, CpuModule, TypeOrmModule.forRoot({
    type: "sqlite",
    database: "mahd.sqlite",
    entities: [User, Report],
    synchronize: true,
  })]
})
export class ComputerModule {}
