import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [CommonModule],
  controllers: [EventsController],
  providers: [EventsService, PrismaService],
})
export class EventsModule {}
