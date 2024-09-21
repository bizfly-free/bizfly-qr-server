import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('me')
  async findMe() {
    return 'My account';
  }

  @Post('login')
  async login() {
    return 'login';
  }
}
