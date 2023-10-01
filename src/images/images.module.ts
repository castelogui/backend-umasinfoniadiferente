import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [CommonModule],
  controllers: [ImagesController],
  providers: [ImagesService, PrismaService],
})
export class ImagesModule {}
