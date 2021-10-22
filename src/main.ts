import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { initSwagger } from './app.swagger';
import { AppModule } from './app.module';

import { generateTypeormConfigFile, setDefaultUser } from './scripts';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const logger = new Logger();
  const config = app.get(ConfigService);

  initSwagger(app);
  setDefaultUser(config);
  generateTypeormConfigFile(config);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors();
  await app.listen(process.env.PORT || 5000, '0.0.0.0');
  logger.verbose(`Server running on ${await app.getUrl()}`);
}
bootstrap();
