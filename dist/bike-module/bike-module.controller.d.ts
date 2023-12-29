import { BikeModuleService } from './bike-module.service';
import { CreateBikeDto } from './dto/create-bike-dto';
import { Response } from 'express';
export declare class BikeModuleController {
    private readonly bikeService;
    constructor(bikeService: BikeModuleService);
    create(createCatDto: CreateBikeDto, res: Response): Promise<void>;
}
