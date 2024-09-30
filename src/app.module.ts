import { AppController } from '@bizfly/app.controller';
import { AppService } from '@bizfly/app.service';
import { UserModule } from '@bizfly/user/user.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
