import { PrismaClient } from '@prisma/client';

import { UserContract } from '@/application/contracts';
import { User } from '@/domain/models';

export class PrismaUserRepository implements UserContract {
  private readonly _prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this._prisma = prisma;
  }

  async create(user: User): Promise<User> {
    const created = await this._prisma.user.create({ data: user });
    return created;
  }

  async findByEmail(email: string): Promise<User | null> {
    const found: User | null = await this._prisma.user.findFirst({
      where: { email },
    });

    return found;
  }
}
