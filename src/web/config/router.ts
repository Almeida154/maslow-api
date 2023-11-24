import { FastifyPluginCallback } from 'fastify';

import {} from '@/web/routes';

export const router: FastifyPluginCallback = (fastify, _, done) => {
  fastify.register(userRoutes);

  done();
};
