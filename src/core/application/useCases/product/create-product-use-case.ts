import { Decimal } from 'decimal.js'

import { Product } from '@core/enterprise/entities/product'
import { Category } from '@core/enterprise/valueObjects/category'
import { ProductGateway } from '@core/application/interfaces/gateway/product-gateway'
import { CreateProductUseCaseRequest } from '@core/application/dtos/create-product-use-case-request'

type CreateProductUseCaseResponse = {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute({
    name,
    price,
    description,
    category,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = new Product(
      name,
      new Decimal(price),
      description,
      new Category(category),
    )

    await this.productGateway.create(product)

    return { product }
  }
}
