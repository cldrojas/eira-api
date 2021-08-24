import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Recibe las requests y resuelve los response ademas de los endpoints

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
