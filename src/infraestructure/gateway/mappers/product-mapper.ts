import { ProductDto } from '@core/application/dtos/product-dto'
import { Product } from '@core/enterprise/entities/product'
import { Category } from '@core/enterprise/valueObjects/category'

export class ProductMapper {
  static toDomain(productDto: ProductDto): Product {
    return new Product(
      productDto.name,
      productDto.price,
      productDto.description,
      new Category(productDto.category),
      productDto.id,
    )
  }
}
