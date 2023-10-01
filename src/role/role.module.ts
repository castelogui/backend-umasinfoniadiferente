import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  imports: [CommonModule],
  controllers: [RoleController],
  providers: [RoleService, PrismaService],
})
export class RoleModule {}
