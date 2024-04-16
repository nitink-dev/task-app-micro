import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { Logger, INestMicroservice } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const logger = new Logger('Main');

  const microservicesOptions: any = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  };

  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    microservicesOptions,
  );

  await app.listen();
  console.log('Microservice listening on port:', 3001);
}

bootstrap();
