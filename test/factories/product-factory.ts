import { Decimal } from 'decimal.js'

import { Product } from '@core/enterprise/entities/product'
import { Category } from '@core/enterprise/valueObjects/category'
import { CreateProductUseCaseRequest } from '@core/application/dtos/create-product-use-case-request'

interface ProductProps {
  id: string
  name: string
  price: Decimal
  description: string
  category: Category
}

export function makeProduct({
  id = '1',
  name = 'Existing Product',
  price = new Decimal(100),
  description = 'Existing Description',
  category = new Category('Acompanhamento'),
}: Partial<ProductProps> = {}): Product {
  return new Product(name, price, description, category, id)
}

export function makeCreateProductRequest(
  override: Partial<CreateProductUseCaseRequest> = {},
): CreateProductUseCaseRequest {
  return {
    name: 'Duplo Cheddar',
    price: new Decimal(100),
    description: 'Pão, carne, queijo, bacon, tomate, alface e maionese.',
    category: 'lanche',
    ...override,
  }
}
