import { PrismaClient } from '@prisma/client'

declare global {
  var db: PrismaClient | undefined // eslint-disable-line
}

export const db = global.db || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.db = db
