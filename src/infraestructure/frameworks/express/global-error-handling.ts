import { Request, Response, NextFunction } from 'express'

// Example of a global error handler
const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  switch (err.name) {
    case 'InvalidProductError':
    case 'InvalidCategoryError':
      res.status(400).json({ statusCode: 400, message: err.message })
      break
    case 'ProductNotFoundError':
      res.status(404).json({ statusCode: 404, message: err.message })
      break
    default:
      res.status(500).json({ statusCode: 500, message: err.message })
      break
  }
}

export default globalErrorHandler
