import { ProductDto } from '@core/application/dtos/product-dto'
import { CreateProductDto } from '@core/application/dtos/create-product-dto'
import { EditProductDto } from '@core/application/dtos/edit-product-dto'
import { Prisma, Product as PrismaProduct } from '@prisma/client'

export class PrismaProductMapper {
  static toDto(raw: PrismaProduct): ProductDto {
    return {
      name: raw.name,
      price: raw.price,
      description: raw.description,
      category: raw.category,
      id: raw.id,
    }
  }

  static toPersistenceCreate(
    product: CreateProductDto,
  ): Prisma.ProductUncheckedCreateInput {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    }
  }

  static toPersistenceUpdate(
    product: EditProductDto,
  ): Prisma.ProductUpdateInput {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    }
  }
}
