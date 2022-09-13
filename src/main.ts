import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api-v2');

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true, // * limpia las atributos que no se esperan
    forbidNonWhitelisted: true, //* restringe que no tenga ningun atributo no esperado
    }),

 );

  await app.listen(3000);
}
bootstrap();
