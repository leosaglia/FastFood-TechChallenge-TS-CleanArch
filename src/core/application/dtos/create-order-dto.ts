export interface CreateOrderDto {
  items: Array<{
    productId: string
    quantity: number
  }>
  customerDocument?: string
}
