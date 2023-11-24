import { FastifyReply, FastifyRequest } from 'fastify';

import { UserContract } from '@/application/contracts';
import { SignInUserUseCase } from '@/application/use-cases';

export const signInUserController = (repository: UserContract) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const useCase = new SignInUserUseCase(repository);
    const found = await useCase.execute(email, password);

    return reply.status(200).send({ user: found });
  };
};
