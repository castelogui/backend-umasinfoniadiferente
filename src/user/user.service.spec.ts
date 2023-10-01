import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

/* eslint-disable prettier/prettier */
const fakeUsers = [
  {
    id: 1,
    name: 'João Silva',
    email: 'email@email.com',
    password: '@#Abc12345',
    createdAt: '2023-09-17T05:09:53.335Z',
    updatedAt: '2023-09-17T05:09:53.335Z',
    roleId: 1,
    status: true,
  },
  {
    id: 2,
    name: 'Maria José',
    email: 'maria@email.com',
    password: '@#Maria123',
    createdAt: '2023-09-17T05:09:53.335Z',
    updatedAt: '2023-09-17T05:09:53.335Z',
    roleId: 1,
    status: true,
  },
  {
    id: 3,
    name: 'Sebastião Souza',
    email: 'tião@email.com',
    password: '@#Sebasti12345',
    createdAt: '2023-09-17T05:09:53.335Z',
    updatedAt: '2023-09-17T05:09:53.335Z',
    roleId: 1,
    status: true,
  },
];

const prismaMock = {
  user: {
    create: jest.fn().mockReturnValue(fakeUsers[0]),
    findMany: jest.fn().mockResolvedValue(fakeUsers),
    findUnique: jest.fn().mockResolvedValue(fakeUsers[0]),
    update: jest.fn().mockResolvedValue(fakeUsers[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
};

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);

    describe('findAll', () => {
      it(`should return an array of users`, async () => {
        const response = await service.findAll();

        expect(response).toEqual(fakeUsers);
        expect(prisma).toHaveBeenCalledTimes(1);
        expect(prisma.user.findMany).toHaveBeenCalledWith(/* nothing */);
      });
    });

    describe('findOne', () => {
      it(`should return a single user`, async () => {
        const response = await service.findOne(1);

        expect(response).toEqual(fakeUsers[0]);
        expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
        expect(prisma.user.findUnique).toHaveBeenCalledWith({
          where: { id: 1 },
        });
      });

      it(`should return nothing when user is not found`, async () => {
        jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(undefined);

        const response = await service.findOne(99);

        expect(response).toBeUndefined();
        expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
        expect(prisma.user.findUnique).toHaveBeenCalledWith({
          where: { id: 99 },
        });
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
