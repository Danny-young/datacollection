import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: ['./src/db/agentSchema.ts',
    './src/db/datacollectionSchema.ts',
    './src/db/electoralAreaSchema.ts',
    './src/db/geolocations.ts',
    './src/db/localitySchema.ts'
     ],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose:true,
  strict:true,
});