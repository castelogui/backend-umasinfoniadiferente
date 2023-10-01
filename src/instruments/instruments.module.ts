import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsController } from './instruments.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [CommonModule],
  controllers: [InstrumentsController],
  providers: [InstrumentsService, PrismaService],
})
export class InstrumentsModule {}
