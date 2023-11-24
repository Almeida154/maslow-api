import path from 'path';

import cors from '@fastify/cors';
import fastify from 'fastify';

import { router } from '@/web/config';

export const buildApp = () => {
  const root = path.join(__dirname, '../../../');

  const app = fastify();

  app.register(cors);
  app.register(router);

  return app;
};
