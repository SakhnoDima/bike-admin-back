import { Module } from "@nestjs/common";
import "dotenv/config";

import { BikeModuleModule } from "./bike-module/bike-module.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_HOST), BikeModuleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
