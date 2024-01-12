import { NotFoundException } from '@nestjs/common';
import { Coffees } from './coffees.entity';
export declare class CoffeesService {
    private coffees;
    getAll(): Coffees[];
    getOne(id: number): Coffees | NotFoundException;
    create(coffee: Coffees): Coffees;
    update(id: number, coffee: Coffees): any;
    delete(id: number): boolean;
    getByName(name: string): Coffees[];
}
