import { Module } from '@nestjs/common';
import { BikeModuleController } from './bike-module.controller';
import { BikeModuleService } from './bike-module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike, CatSchema } from 'src/schemas/bike-schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bike.name, schema: CatSchema }]),
  ],
  controllers: [BikeModuleController],
  providers: [BikeModuleService],
})
export class BikeModuleModule {}
