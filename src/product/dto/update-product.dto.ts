import { IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  basePrice: number;
}
