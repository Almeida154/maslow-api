import { FastifyPluginCallback } from 'fastify';

import { prisma } from '@/infra/db/prisma';
import { PrismaUserRepository } from '@/infra/repositories';

import { createUserController, signInUserController } from '@/web/controllers';

export const userRoutes: FastifyPluginCallback = (fastify, _, done) => {
  const prismaUserRepository = new PrismaUserRepository(prisma);

  fastify.post('/user/create', createUserController(prismaUserRepository));

  fastify.post('/user/sign-in', signInUserController(prismaUserRepository));

  done();
};
