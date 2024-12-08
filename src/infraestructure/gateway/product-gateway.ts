import { Product } from '@core/enterprise/entities/product'
import { IProductGateway } from '@core/application/interfaces/gateway/product-gateway-interface'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import { ProductMapper } from './mappers/product-mapper'

export class ProductGateway implements IProductGateway {
  constructor(private readonly dataSouce: IProductDataSource) {}

  create(product: Product): Promise<void> {
    throw new Error('Method not implemented.')
  }

  edit(product: Product): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.dataSouce.findById(id)

    if (!product) {
      return null
    }

    return ProductMapper.toDomain(product)
  }

  async findMany(query: { category?: string }): Promise<Product[]> {
    const products = await this.dataSouce.findMany(query)

    return products.map(ProductMapper.toDomain)
  }
}
