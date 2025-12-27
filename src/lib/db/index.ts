import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'
import { relations } from './relations'

const client = new SQL({ url: process.env.DATABASE_URL!, adapter: "postgres" })
const db = drizzle({ client, relations })

export default db
