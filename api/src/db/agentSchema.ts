import { integer, pgTable, varchar, boolean, timestamp  } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";


export const agentsTable = pgTable("agents", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(), 
    name: varchar({ length: 50 }).notNull(), // Full name of the agent
    email: varchar({ length: 150 }).notNull().unique(), // Agent's email address
    username: varchar({ length: 150 }).notNull(), // Unique username for the agent
    phoneNumber: varchar({length:35}).notNull(), // Agent's phone number
    role: varchar({length:35}).notNull().default('agent'), // Foreign key to roles table
    password: varchar({ length: 255 }).notNull(), // Encrypted password
    firstLogin: boolean().notNull().default(true), // Indicates if the agent is logging in for the first time
    createdAt: timestamp().defaultNow().notNull(), // Timestamp when the agent account was created
    updatedAt: timestamp().defaultNow().notNull(),//.$onUpdateFn, // Timestamp when the agent account was last updated
  });

  // export const createUserSchema = createInsertSchema(agentsTable).omit({
  //   id: true, 
  // }).pick({
  //   name: true,
  //   email: true,
  //   phoneNumber: true,
    
  // }); ;


  
  export const createAgentSchema = createInsertSchema(agentsTable).pick({
    email: true,
    name: true,
    phoneNumber: true,

       
  });

  export const loginSchema = createInsertSchema(agentsTable).pick({
    username: true,
    password: true,  
        
  });