import { defineRelations } from "drizzle-orm";
import { user } from "./schema/user";

export const relations = defineRelations({ user }, (r) => ({
  // Define relations here in the future
}))
