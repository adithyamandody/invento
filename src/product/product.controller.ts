import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() createDto: CreateProductDto) {
    this.productService.create(createDto);
  }

  @Put()
  update(@Body() updateProductDto: UpdateProductDto) {
    this.productService.update(updateProductDto);
  }
}
