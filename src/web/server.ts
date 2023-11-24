import { buildApp } from '@/web/config';

buildApp().listen({
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
  host: '0.0.0.0',
});
