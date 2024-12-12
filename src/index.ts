import PrismaCustomerRepository from '@infra/database/postgress/prisma-customer-repository'
import { PrismaProductRepository } from '@infra/database/postgress/prisma-product-repository'
import { TechChallengeAPI } from '@infra/frameworks/express/server'
import { PrismaService } from '@infra/frameworks/prisma/prisma.service'

const prodcutDataSource = new PrismaProductRepository(new PrismaService())
const customerDataSource = new PrismaCustomerRepository(new PrismaService())

TechChallengeAPI.start(prodcutDataSource, customerDataSource)
