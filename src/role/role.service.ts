import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: Prisma.RoleCreateInput) {
    return this.prisma.role.create({
      data: createRoleDto,
    });
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRoleDto: Prisma.RoleUpdateInput) {
    return this.prisma.role.update({
      where: {
        id: id,
      },
      data: updateRoleDto,
    });
  }

  remove(id: number) {
    return this.prisma.role.delete({
      where: {
        id: id,
      },
    });
  }
}
