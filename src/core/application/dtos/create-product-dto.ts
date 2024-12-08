import { Decimal } from 'decimal.js'

export interface CreateProductDto {
  name: string
  price: Decimal
  description: string
  category: string
}
