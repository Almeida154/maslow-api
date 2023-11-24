import { FastifyReply, FastifyRequest } from 'fastify';

import { User } from '@/domain/models';

import { UserContract } from '@/application/contracts';
import { CreateUserUseCase } from '@/application/use-cases';

export const createUserController = (repository: UserContract) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body as User;

    const user = new User(data);

    const useCase = new CreateUserUseCase(repository);
    const created = await useCase.execute(user);

    return reply.status(200).send({ user: created });
  };
};
