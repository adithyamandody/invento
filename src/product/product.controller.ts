import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/findone')
  getusers(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.getOne(productId);
  }
  @Post('/post')
  create(@Body() createDto: CreateProductDto) {
    return this.productService.create(createDto);
  }

  @Put('put')
  update(@Body() updateProductDto: UpdateProductDto) {
    this.productService.update(updateProductDto);
  }

  @Get('findAll')
  findall() {
    return this.productService.get();
  }
}
