import { pgTable, uuid, numeric, text, integer, timestamp, foreignKey, varchar } from "drizzle-orm/pg-core";
import { agentsTable } from "./agentSchema.js";

// Geolocation Table
export const geolocationTable = pgTable("geolocation", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),  // Unique identifier for each record
  agentId: integer("agent_id").notNull().references(() => agentsTable.id, { onDelete: 'cascade' , onUpdate: 'cascade'}),
  latitude: numeric("latitude", { precision: 10, scale: 8 }).notNull(), // Latitude with high precision
  longitude: numeric("longitude", { precision: 11, scale: 8 }).notNull(), // Longitude with high precision
  closeMeter: integer("close_meter").notNull(), // Distance in meters
  description: text("description"), // Optional description of the location
  createdAt: timestamp("created_at").defaultNow(), // Timestamp when the record was created
});

