import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Bike } from "src/schemas/bike-schemas";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { HttpErrors } from "src/helpers/handleErrors";
import { IRez, statisticsCalculator } from "src/helpers/statisticsCalculator";

@Injectable()
export class BikeModuleService {
  constructor(
    @InjectModel(Bike.name) private readonly bikeModel: Model<Bike>
  ) {}

  //? add bike to a db

  async create(createCatDto: CreateBikeDto): Promise<Bike> {
    try {
      const createBike = await this.bikeModel.create(createCatDto);
      const newBike = await this.bikeModel.findById(createBike._id, "-__v");
      return newBike;
    } catch (error) {
      HttpErrors(
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Oops, have some error, try later"
      );
    }
  }

  //? find all bikes from db

  async findAll(): Promise<Bike[]> {
    return await this.bikeModel.find().exec();
  }

  //? delete bike from db by id

  async delete(id: string) {
    const deletedBike = await this.bikeModel
      .findByIdAndDelete({ _id: id })
      .exec();

    if (!deletedBike) {
      HttpErrors(HttpStatus.NOT_FOUND, `Bike with id ${id} not found`);
    }
    return deletedBike;
  }

  //? update bike info by id

  async update(id: string, status: any) {
    const bikeForUpdating = await this.bikeModel.findByIdAndUpdate(id, status, {
      new: true,
    });

    if (!bikeForUpdating) {
      HttpErrors(HttpStatus.NOT_FOUND, `Bike with id ${id} not found`);
    }

    return bikeForUpdating;
  }

  //? get info

  async getInfo(): Promise<IRez> {
    const info = await this.bikeModel.aggregate([
      {
        $group: {
          _id: "$status",
          totalBike: { $count: {} },
          avgPrice: { $avg: "$price" },
        },
      },
      { $project: { _id: 1, totalBike: 1, avgPrice: 1 } },
    ]);

    const rez = statisticsCalculator(info);

    return rez;
  }
}
