import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/server.module';
import * as bodyParser from "body-parser";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  await app.listen(3001);
}
bootstrap().catch(err => console.error(err));