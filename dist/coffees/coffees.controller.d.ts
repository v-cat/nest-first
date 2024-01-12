import { CoffeesService } from './coffees.service';
import { CreateCoffeesDto } from './dto/create-coffees.dto/create-coffees.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(): import("./coffees.entity").Coffees[];
    findOne(id: number): import("./coffees.entity").Coffees | import("@nestjs/common").NotFoundException;
    create(createCoffeesDto: CreateCoffeesDto): import("./coffees.entity").Coffees;
    update(id: any, body: any): any;
    remove(id: any): boolean;
}
