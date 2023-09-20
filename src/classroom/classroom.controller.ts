import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { Prisma } from '@prisma/client';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  create(@Body() createClassroomDto: Prisma.ClassroomCreateInput) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  findAll() {
    return this.classroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classroomService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassroomDto: Prisma.ClassroomUpdateInput,
  ) {
    return this.classroomService.update(+id, updateClassroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classroomService.remove(+id);
  }
}
