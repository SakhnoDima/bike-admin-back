import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from "@nestjs/common";
import { BikeModuleService } from "./bike-module.service";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { Response } from "express";
import { Bike } from "src/schemas/bike-schemas";

@Controller("bike")
export class BikeModuleController {
  constructor(private readonly bikeService: BikeModuleService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createCatDto: CreateBikeDto, @Res() res: Response) {
    await this.bikeService.create(createCatDto);

    res.json({ message: "Bike was saved successful" });
  }

  @Get()
  async find(): Promise<Bike[]> {
    return await this.bikeService.findAll();
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.bikeService.delete(id);
  }
}
