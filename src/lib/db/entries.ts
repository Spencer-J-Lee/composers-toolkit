import { bigint, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { ENTRY_STATUSES } from "@/lib/types/Entry";

export const entryStatusEnum = pgEnum("entry_status", ENTRY_STATUSES);

export const entries = pgTable("entries", {
  id: bigint("id", { mode: "number" }).primaryKey(),
  ownerId: bigint("owner_id", { mode: "number" }).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: entryStatusEnum("status"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});
