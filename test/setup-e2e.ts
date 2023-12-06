import 'dotenv/config'

import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'

const prisma = new PrismaClient()

if (!process.env.DATABASE_URL) {
  // mesma DATABASE_URL, mas no prisma podemos alterar o schema para subdivisões
  // não precisamos de um banco novo
  throw Error('Please provide a DATABASE_URL env variable.')
}

function generateUniqueDatabaseURl(schemaID: string) {
  if (!process.env.DATABASE_URL) {
    // mesma DATABASE_URL, mas no prisma podemos alterar o schema para subdivisões
    // não precisamos de um banco novo
    // gera copia do banco zerada
    throw Error('Please provide a DATABASE_URL env variable.')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schemaID) // alteramos a url

  return url.toString()
}

const schemaId = randomUUID()

// obs: all não each
beforeAll(() => {
  const databaseUrl = generateUniqueDatabaseURl(schemaId)

  process.env.DATABASE_URL = databaseUrl

  execSync('npx prisma migrate deploy')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
