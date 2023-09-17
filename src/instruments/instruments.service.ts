import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class InstrumentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInstrumentDto: Prisma.InstrumentCreateInput) {
    return this.prisma.instrument.create({
      data: createInstrumentDto,
    });
  }

  findAll() {
    return this.prisma.instrument.findMany();
  }

  findOne(id: number) {
    return this.prisma.instrument.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateInstrumentDto: Prisma.InstrumentUpdateInput) {
    return this.prisma.instrument.update({
      where: {
        id: id,
      },
      data: updateInstrumentDto,
    });
  }

  remove(id: number) {
    return this.prisma.instrument.delete({
      where: {
        id: id,
      },
    });
  }
}
