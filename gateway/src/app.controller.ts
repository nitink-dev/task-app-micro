import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    @Inject('user_service') private readonly userService: ClientProxy, 
    @Inject('task_service') private readonly taskService: ClientProxy) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getAllUsers() {
    // Call the 'getAllUsers' method of the user microservice
    const users = await this.userService.send<any>({ cmd: 'getAllUsers' }, {}).toPromise();
    return users;
  }

  @Get('tasks')
  async getAllTask() {
    // Call the 'getAllUsers' method of the user microservice
    const users = await this.taskService.send<any>({ cmd: 'getAllTask' }, {}).toPromise();
    return users;
  }
}
