import { IsString, IsNumber } from 'class-validator';
export class CreateCoffeesDto {
  @IsNumber()
  readonly id: number;

  @IsString({ each: true })
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly desc: string;

  @IsString()
  readonly img: string;
}
