import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController], 
  imports : [ DiskModule, CpuModule, TypeOrmModule.forRoot({
    type: "sqlite",
    database: "mahd.sqlite",
    entities: [],
    synchronize: true,
  })]
})
export class ComputerModule {}
