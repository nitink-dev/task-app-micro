import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Import and configure microservices for each service
    ClientsModule.register([
      {
        name: 'user_service',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
      {
        name: 'task_service',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002, // Adjust port as per your microservice's configuration
        },
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}


