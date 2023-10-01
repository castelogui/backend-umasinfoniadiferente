/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name?: string;
  email: string;
  password: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  roleId: number;
  status?: boolean;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
