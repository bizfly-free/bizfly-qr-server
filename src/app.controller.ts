import { AppService } from '@bizfly/app.service';

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healthcheck')
  healthcheck(): string {
    return this.appService.healthcheck();
  }
}
