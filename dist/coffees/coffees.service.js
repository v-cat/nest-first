"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesService = void 0;
const common_1 = require("@nestjs/common");
let CoffeesService = class CoffeesService {
    constructor() {
        this.coffees = [
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
    }
    getAll() {
        return this.coffees;
    }
    getOne(id) {
        const coffee = this.coffees.find((coffee) => coffee.id === +id);
        if (!coffee) {
            return new common_1.NotFoundException(`Coffee #${id} not found`);
        }
        else {
            return coffee;
        }
    }
    create(coffee) {
        this.coffees.push(coffee);
        return coffee;
    }
    update(id, coffee) {
        const existingCoffee = this.coffees.find((c) => c.id === id);
        if (!existingCoffee) {
            return null;
        }
        existingCoffee.name = coffee.name;
        existingCoffee.brand = coffee.brand;
        existingCoffee.price = coffee.price;
    }
    delete(id) {
        const existingCoffee = this.coffees.find((c) => c.id === id);
        if (!existingCoffee) {
            return null;
        }
        this.coffees = this.coffees.filter((c) => c.id !== id);
        return true;
    }
    getByName(name) {
        return this.coffees.filter((coffee) => coffee.name.includes(name));
    }
};
exports.CoffeesService = CoffeesService;
exports.CoffeesService = CoffeesService = __decorate([
    (0, common_1.Injectable)()
], CoffeesService);
//# sourceMappingURL=coffees.service.js.map