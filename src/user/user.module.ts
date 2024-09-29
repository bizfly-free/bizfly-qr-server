import { UserController } from '@bizfly/user/user.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
