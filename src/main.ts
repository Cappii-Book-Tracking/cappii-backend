import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import 'dotenv/config';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiPath = process.env.API_PATH || 'api';
  app.setGlobalPrefix(apiPath);

  const mikroOrm = app.get(MikroORM);
  await mikroOrm.migrator.up();

  await app.listen(process.env.API_PORT ?? 3000);
}
bootstrap();
