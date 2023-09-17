import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ShiftService {
  constructor(private readonly prisma: PrismaService) { }

  create(createShiftDto: Prisma.ShiftCreateInput) {
    return this.prisma.shift.create({
      data: createShiftDto,
    });
  }

  findAll() {
    return this.prisma.shift.findMany();
  }

  findOne(id: number) {
    return this.prisma.shift.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateShiftDto: Prisma.ShiftUpdateInput) {
    return this.prisma.shift.update({
      where: {
        id: id
      },
      data: updateShiftDto
    })
  }

  remove(id: number) {
    return this.prisma.shift.delete({
      where: {
        id: id
      }
    });
  }
}
