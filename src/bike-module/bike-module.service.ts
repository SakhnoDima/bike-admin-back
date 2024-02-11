import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
const cloudinary = require("cloudinary").v2;

import { Bike } from "src/schemas/bike-schemas";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { HttpErrors } from "src/helpers/handleErrors";
import { IRez, statisticsCalculator } from "src/helpers/statisticsCalculator";
import { options } from "./constant/cloudinaryOptions";
import { AddBikePhotoDto } from "./dto/add-bike-photo-dto";

@Injectable()
export class BikeModuleService {
  constructor(
    @InjectModel(Bike.name) private readonly bikeModel: Model<Bike>
  ) {}

  //? add bike to a db

  async create(
    createBikeDto: CreateBikeDto,
    owner: { id: Schema.Types.ObjectId }
  ): Promise<Bike> {
    const idIsExist = await this.bikeModel.findOne({ id: createBikeDto.id });

    if (idIsExist)
      HttpErrors(
        HttpStatus.FORBIDDEN,
        `Bike with id - ${createBikeDto.id} is exist`
      );

    const createBike = await this.bikeModel.create({
      ...createBikeDto,
      owner,
    });
    const newBike = await this.bikeModel.findById(createBike._id, "-__v");
    return newBike;
  }

  //? find all bikes from db

  async findAll(): Promise<Bike[]> {
    return await this.bikeModel.find().exec();
  }

  //? find bikes from db by userId

  async findUserBikes(userId: { id: Schema.Types.ObjectId }): Promise<Bike[]> {
    return await this.bikeModel.find({
      owner: userId,
    });
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

  async getInfo(userId: { id: Schema.Types.ObjectId }): Promise<IRez> {
    const info = await this.bikeModel.aggregate([
      { $match: { owner: userId } },

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

  async cloudService(
    file: Express.Multer.File,
    userId: { id: Schema.Types.ObjectId },
    id: Schema.Types.ObjectId
  ): Promise<AddBikePhotoDto> {
    let user;
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        ...options,
        folder: `bikes/${userId}`,
      });

      if (!result) {
        HttpErrors(
          HttpStatus.INTERNAL_SERVER_ERROR,
          `Something went wrong try. Pleas try again letter.`
        );
      }

      user = await this.bikeModel.findByIdAndUpdate(
        id,
        {
          photo: result.url,
        },
        { new: true }
      );

      if (!user) {
        HttpErrors(HttpStatus.NOT_FOUND, `User with id ${id} not found`);
      }
    } catch (error) {
      HttpErrors(HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
    return user;
  }
}
