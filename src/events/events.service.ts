import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEventDto: Prisma.EventsCreateInput) {
    return this.prisma.events.create({
      data: createEventDto,
    });
  }

  findAll() {
    return this.prisma.events.findMany();
  }

  findOne(id: number) {
    return this.prisma.events.findUnique({ where: { id } });
  }

  update(id: number, updateEventDto: Prisma.EventsUpdateInput) {
    return this.prisma.events.update({
      where: { id },
      data: updateEventDto,
    });
  }

  remove(id: number) {
    return this.prisma.events.delete({ where: { id } });
  }
}
