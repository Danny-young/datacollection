import { pgTable, uuid, numeric,varchar, text, integer, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { agentsTable } from "./agentSchema";
import { geolocationTable } from "./geolocations";
import { localitiesTable } from "./localitySchema";
import { electoralAreasTable } from "./electoralAreaSchema";


export const collectDataTable = pgTable("collect_data", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(), // Unique identifier for each data collection entry
    agentId: integer("agent_id").notNull().references(() => agentsTable.id, { onDelete: 'cascade' , onUpdate: 'cascade'}),
    phoneNumber: numeric("phone_number").notNull(), // Phone number for the data record
    firstName: varchar("first_name", { length: 50 }).notNull(), // First name of the person
    lastName: varchar("last_name", { length: 50 }).notNull(), // Last name of the person
    electoralArea: varchar("electoral_area", { length: 100 }).notNull(), // Electoral area
    //electoralAreaId: integer().references(() => electoralAreasTable.id),
    //localityId: integer().references(() => localitiesTable.id),
    locality: varchar("locality", { length: 100 }).notNull(), // Town or locality
    id_type: varchar("id_type", { length:20}).notNull(), 
    id_number: text("id_number").notNull(), // Ghana Card or Passport number
    nationality: varchar("nationality", { length: 50 }).notNull(), // Nationality
    streetName: varchar("street_name", { length: 150 }).notNull(), // Street name
    valuationNo: varchar("valuation_no", { length: 150 }).notNull(), // Valuation number
    geolocationId: integer("geolocation_id").references(() => geolocationTable.id, { onDelete: 'set null' }),
    dataType: varchar("data_type", { length: 20 }).notNull(), // Either "business" or "property"
    dataTypeInfo: varchar("data_type_Info", { length: 20 }).notNull(), // Either "commercial", or "property
    createdAt: timestamp("created_at").defaultNow(), 
  });
  
 