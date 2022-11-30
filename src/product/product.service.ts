import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createDto: CreateProductDto) {
    this.productRepository.save(createDto);
  }

  update(updateDto: UpdateProductDto) {
    this.productRepository.update(updateDto.id, updateDto);
  }
}
