// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const publications = sqliteTable("publications", {
  id: text("id").primaryKey(),
  kind: text("kind").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  category: text("category").notNull().default(""),
  reference: text("reference").notNull().default(""),
  link: text("link").notNull().default(""),
  starts: text("starts").notNull().default(""),
  ends: text("ends").notNull().default(""),
  published: integer("published").notNull().default(0),
  fileKey: text("file_key").notNull(),
  filename: text("filename").notNull(),
  mime: text("mime").notNull(),
  size: integer("size").notNull(),
  created: text("created").notNull(),
  updated: text("updated").notNull(),
}, (table) => [index("publications_public_idx").on(table.kind, table.published)]);

export const adminSessions = sqliteTable("admin_sessions", {
  tokenHash: text("token_hash").primaryKey(),
  authVersion: text("auth_version").notNull(),
  expires: integer("expires").notNull(),
}, table => [index("admin_sessions_expiry_idx").on(table.expires)]);
export const loginAttempts = sqliteTable("login_attempts", {
  key: text("key").primaryKey(),
  count: integer("count").notNull().default(0),
  expires: integer("expires").notNull(),
});
