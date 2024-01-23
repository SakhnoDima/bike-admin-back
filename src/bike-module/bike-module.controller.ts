import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { diskStorage } from "multer";

import { BikeModuleService } from "./bike-module.service";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { Bike } from "src/schemas/bike-schemas";
import { UpdateStatusDto } from "./dto/update-status-dto";
import { IRez } from "src/helpers/statisticsCalculator";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadPhotoDto } from "./dto/uploadBikePhoto-dto";

@Controller("bike")
export class BikeModuleController {
  constructor(private readonly bikeService: BikeModuleService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createCatDto: CreateBikeDto) {
    return await this.bikeService.create(createCatDto);
  }

  @Get()
  async find(): Promise<Bike[]> {
    return await this.bikeService.findAll();
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.bikeService.delete(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateStatusDto: UpdateStatusDto
  ): Promise<Bike> {
    return this.bikeService.update(id, updateStatusDto);
  }

  @Get("/info")
  async getInfo(): Promise<IRez> {
    return await this.bikeService.getInfo();
  }

  @Post("/update_photo")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "../tmp",
      }),
    })
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File
  ): Promise<UploadPhotoDto> {
    const rez = await this.bikeService.cloudService(file);
    return { path: rez };
  }
}
