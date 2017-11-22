import { Module, Inject } from '@nestjs/common';
import { AppsModule } from './apps/apps.module';
import { DatabaseModule } from './database/database.module';
import { Connection } from "mongoose";

@Module({
  modules: [
    AppsModule, 
    DatabaseModule
  ]
})
export class ApplicationModule {
  constructor(@Inject('DbConnectionToken') private dbConn: Connection) { }
}