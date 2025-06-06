import { bigint, bigserial, pgTable, timestamp } from "drizzle-orm/pg-core";

export const entryTags = pgTable("entry_tags", {
  id: bigserial({ mode: "number" }).primaryKey(),
  entryId: bigint("entry_id", { mode: "number" }),
  tagId: bigint("tag_id", { mode: "number" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});
