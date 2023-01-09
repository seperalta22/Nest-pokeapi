import { CreatePokemonDto } from './create-pokemon.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
