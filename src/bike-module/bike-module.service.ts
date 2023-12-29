import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike } from 'src/schemas/bike-schemas';
import { CreateBikeDto } from './dto/create-bike-dto';

@Injectable()
export class BikeModuleService {
  constructor(
    @InjectModel(Bike.name) private readonly bikeModel: Model<Bike>,
  ) {}

  async create(createCatDto: CreateBikeDto): Promise<Bike> {
    const createBike = await this.bikeModel.create(createCatDto);
    return createBike;
  }
}
