import { PrismaProductRepository } from '@infra/database/postgress/prisma-product-repository'
import { TechChallengeAPI } from '@infra/frameworks/express/server'
import { PrismaService } from '@infra/frameworks/prisma/prisma.service'

const dataSource = new PrismaProductRepository(new PrismaService())
TechChallengeAPI.start(dataSource)
