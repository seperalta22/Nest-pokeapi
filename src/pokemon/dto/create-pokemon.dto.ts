import {
  IsString,
  IsInt,
  IsNumber,
  MinLength,
  IsPositive,
  Min,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
