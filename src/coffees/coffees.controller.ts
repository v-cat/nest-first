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
  Sse,
  Header,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeesDto } from './dto/create-coffees.dto/create-coffees.dto';
import { Observable, interval, map } from 'rxjs';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }
  // @Get('sse')
  // // @Sse()
  // // @Header('Content-type', 'text/event-stream')
  // sse(): Observable<any> {
  //   return interval(1000).pipe(map((_) => ({ data: 'hello world2' })));
  // }
  @Get('findCooffees')
  @Sse()
  // @Header('Content-type', 'text/event-stream')
  findAll(): Observable<any> {
    // const { limit, offect } = paginationQuery;
    // return 111,
    return interval(1000).pipe(map((_) => ({ data: this.coffeesService.getAll() })));

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
  // @Get('sse')
  // // @Sse()
  // // @Header('Content-type', 'text/event-stream')
  // sse(): Observable<any> {
  //   return interval(1000).pipe(map((_) => ({ data: 'hello world2' })));
  // }

}
