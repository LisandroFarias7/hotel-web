/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const configService = app.get(ConfigService);
  const port = configService.get('PORT')
  console.log('Server listen on port', port)
  await app.listen(port);
}
bootstrap();
