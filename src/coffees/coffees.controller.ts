import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeesDto } from './dto/create-coffees.dto/create-coffees.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get('findCooffees')
  findAll() {
    // const { limit, offect } = paginationQuery;
    return this.coffeesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.getOne(id);
    // return `This action returns # ${params.id} coffees`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeesDto: CreateCoffeesDto) {
    console.log(createCoffeesDto);
    return this.coffeesService.create(createCoffeesDto);
  }
  @Patch(':id')
  update(@Param('id') id, @Body() body) {
    return this.coffeesService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id) {
    return this.coffeesService.delete(id);
  }
}
