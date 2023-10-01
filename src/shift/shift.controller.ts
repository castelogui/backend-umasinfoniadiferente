import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShiftService } from './shift.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shift')
@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  create(@Body() createShiftDto: Prisma.ShiftCreateInput) {
    return this.shiftService.create(createShiftDto);
  }

  @Get()
  findAll() {
    return this.shiftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.shiftService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateShiftDto: Prisma.ShiftUpdateInput,
  ) {
    return this.shiftService.update(+id, updateShiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.shiftService.remove(+id);
  }
}
