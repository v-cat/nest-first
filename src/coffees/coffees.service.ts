import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffees } from './coffees.entity';
// import {CreateCoffeesDto} from './dto/create-coffee.dto';
@Injectable()
export class CoffeesService {
  private coffees: Coffees[] = [
    {
      id: 1,
      name: 'Cafe Latte',
      brand: 'Starbucks',
      price: 4.5,
      img: '',
      desc: 'Cafe Latte is a blend of two coffee types: Americano and mocha. The Americano is a light, almost dry coffee made with ground coffee and steamed milk.',
    },
    {
      id: 2,
      name: 'Cafe Americano',
      brand: 'Starbucks',
      price: 4.5,
      img: '',
      desc: 'Cafe Americano is a light, almost dry coffee made with ground coffee and steamed milk.',
    },
  ];
  getAll() {
    return this.coffees;
  }
  getOne(id: number) {
    const coffee: Coffees = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      return new NotFoundException(`Coffee #${id} not found`);
    } else {
      return coffee;
    }
  }
  create(coffee: Coffees) {
    this.coffees.push(coffee);
    return coffee;
  }
  update(id: number, coffee: Coffees) {
    const existingCoffee = this.coffees.find((c) => c.id === id);
    if (!existingCoffee) {
      return null;
    }
    existingCoffee.name = coffee.name;
    existingCoffee.brand = coffee.brand;
    existingCoffee.price = coffee.price;
  }
  delete(id: number) {
    const existingCoffee = this.coffees.find((c) => c.id === id);
    if (!existingCoffee) {
      return null;
    }
    this.coffees = this.coffees.filter((c) => c.id !== id);
    return true;
  }
  getByName(name: string) {
    return this.coffees.filter((coffee) => coffee.name.includes(name));
  }
}
