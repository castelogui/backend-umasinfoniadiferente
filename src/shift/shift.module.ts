import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { ShiftController } from './shift.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [CommonModule],
  controllers: [ShiftController],
  providers: [ShiftService, PrismaService],
})
export class ShiftModule {}
