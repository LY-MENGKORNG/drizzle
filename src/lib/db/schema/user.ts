import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 50 }).notNull(),
})
