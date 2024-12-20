import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:8081',
      'http://192.168.0.31:8081',
      'http://10.71.106.176:8081',
    ], // Replace with your frontend URL
    credentials: true, // Enable if needed for cookies/auth
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET,POST,PUT,DELETE', // Limit methods if needed
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
