import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/about')
  getAbout(): string {
    return 'about route';
  }

  @Get('/dashboard')
  getDashboard(): string {
    return 'dashboard route';
  }

  @Get('/user')
  async getUser(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
