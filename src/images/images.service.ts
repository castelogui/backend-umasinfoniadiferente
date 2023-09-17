import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private readonly prisma: PrismaService) { }

  create(createImageDto: Prisma.ImagesCreateInput) {
    return this.prisma.images.create({
      data: createImageDto
    });
  }

  findAll() {
    return this.prisma.images.findMany();
  }

  findOne(id: number) {
    return this.prisma.images.findUnique({ where: { id } });
  }

  update(id: number, updateImageDto: Prisma.ImagesUpdateInput) {
    return this.prisma.images.update({
      where: { id },
      data: updateImageDto
    });
  }

  remove(id: number) {
    return this.prisma.images.delete({ where: { id } });
  }
}
