import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAdressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  number: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;
}
