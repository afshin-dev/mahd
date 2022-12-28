import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common"
import {ComputerModule} from "./computer/computer.module"

const CookieSession = require("cookie-session")

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);

  app.use(new CookieSession({keys : ["afshin dev mahd"]}))

  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  
  await app.listen(3000);
}
bootstrap();
