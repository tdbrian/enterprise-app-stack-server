import { Module } from '@nestjs/common';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';
import { AppModel } from './app.model';

@Module({
  modules: [],
  controllers: [AppsController],
  components: [
    AppsService,
    AppModel
  ],
})
export class AppsModule {}