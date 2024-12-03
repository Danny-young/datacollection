import { integer, pgTable, varchar, boolean,  numeric, timestamp  } from "drizzle-orm/pg-core";

export const agentsTable = pgTable("agents", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 50 }).notNull(), // Full name of the agent
    email: varchar({ length: 150 }).notNull(), // Agent's email address
    username: varchar({ length: 150 }).notNull(), // Unique username for the agent
    phoneNumber: numeric().notNull(), // Agent's phone number
    password: varchar({ length: 255 }).notNull(), // Encrypted password
    firstLogin: boolean().notNull().default(true), // Indicates if the agent is logging in for the first time
    createdAt: timestamp().defaultNow().notNull(), // Timestamp when the agent account was created
    updatedAt: timestamp().defaultNow().notNull()//.$onUpdateFn, // Timestamp when the agent account was last updated
  });