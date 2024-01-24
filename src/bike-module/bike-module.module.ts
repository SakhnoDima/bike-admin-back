import { Module } from "@nestjs/common";
import { BikeModuleController } from "./bike-module.controller";
import { BikeModuleService } from "./bike-module.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Bike, BikesSchema } from "src/schemas/bike-schemas";
import { CloudinaryProvider } from "./cloudinary-provider";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bike.name, schema: BikesSchema }]),
  ],
  controllers: [BikeModuleController],
  providers: [BikeModuleService, CloudinaryProvider],
})
export class BikeModuleModule {}
