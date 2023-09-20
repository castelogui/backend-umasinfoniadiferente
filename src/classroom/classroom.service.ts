import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ClassroomService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassroomDto: Prisma.ClassroomCreateInput) {
    return this.prisma.classroom.create({
      data: createClassroomDto,
    });
  }

  findAll() {
    return this.prisma.classroom.findMany();
  }

  findOne(id: number) {
    return this.prisma.classroom.findUnique({
      where: { id },
    });
  }

  update(id: number, updateClassroomDto: Prisma.ClassroomUpdateInput) {
    return this.prisma.classroom.update({
      where: { id },
      data: updateClassroomDto,
    });
  }

  remove(id: number) {
    return this.prisma.classroom.delete({
      where: { id },
    });
  }
}
