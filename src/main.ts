import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb' }));
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
