import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação Backend Uma Sinfonia Diferente - Swagger')
    .setDescription(
      'Documemntação feita com swagger para a api do projeto Uma Sinfonia Diferente',
    )
    .setVersion('1.0')
    .addTag('user')
    .addTag('shift')
    .addTag('role')
    .addTag('instruments')
    .addTag('images')
    .addTag('events')
    .addTag('classroom')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}
bootstrap();
