import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Bike } from "src/schemas/bike-schemas";
import { CreateBikeDto } from "./dto/create-bike-dto";

@Injectable()
export class BikeModuleService {
  constructor(
    @InjectModel(Bike.name) private readonly bikeModel: Model<Bike>
  ) {}

  async create(createCatDto: CreateBikeDto): Promise<Bike> {
    const createBike = await this.bikeModel.create(createCatDto);
    return createBike;
  }
  async findAll(): Promise<Bike[]> {
    return await this.bikeModel.find().exec();
  }
  async delete(id: string) {
    const deletedBike = await this.bikeModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedBike;
  }
}
