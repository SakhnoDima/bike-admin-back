import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { BikeModuleService } from './bike-module.service';
import { CreateBikeDto } from './dto/create-bike-dto';
import { Response } from 'express';

@Controller('bike')
export class BikeModuleController {
  constructor(private readonly bikeService: BikeModuleService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body() createCatDto: CreateBikeDto, @Res() res: Response) {
    await this.bikeService.create(createCatDto);

    res.json({ message: 'Bike was saved successful' });
  }
}
