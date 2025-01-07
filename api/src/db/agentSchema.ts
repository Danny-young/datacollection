import { integer, pgTable, varchar, boolean, timestamp  } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";



export const agentsTable = pgTable("agents", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 150 }).notNull().unique(),
  user_name: varchar({ length: 50 }).unique().notNull(),
  phone_number: varchar({ length: 15 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  first_login: boolean().notNull().default(true),
  created_at: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(), // Add trigger for automatic updates
  role: varchar({ length: 35 }).default("agent").notNull(), 
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
    phone_number: true,

       
  });

  export const loginSchema = createInsertSchema(agentsTable).pick({
    user_name: true,
    password: true,  
        
  });