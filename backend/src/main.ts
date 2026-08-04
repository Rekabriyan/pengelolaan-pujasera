import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Enable global ValidationPipe with transformation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Pengelolaan Pujasera API')
    .setDescription(
      'Dokumentasi REST API untuk sistem manajemen pujasera (food court). ' +
        'Mencakup modul Barang, Kasir, Tenan, Nota, dan Barang Nota.',
    )
    .setVersion('1.0')
    .addTag('Barang', 'Manajemen data barang / produk')
    .addTag('Kasir', 'Manajemen data kasir')
    .addTag('Tenan', 'Manajemen data tenan / penyewa')
    .addTag('Nota', 'Manajemen nota / transaksi')
    .addTag('Barang Nota', 'Detail item barang per nota transaksi')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
    },
    customSiteTitle: 'Pujasera API Docs',
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger docs available at: http://localhost:${port}/api/docs`);
}
bootstrap();
