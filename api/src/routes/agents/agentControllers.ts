import { Request, Response } from "express";
import {db} from '../../db/index';
import { agentsTable } from '../../db/agentSchema';
import { eq } from "drizzle-orm"


export const getAgents = async (req: Request, res: Response) => {

try {
    const agent = await db.select().from(agentsTable)
    res.json(agent);
    } catch (e) {
     
      res.status(500).send(e);
    }
};

export async function createAgent(req: Request, res: Response){
    // console.log(req.body);
  try {
  const [agent] =  await db.insert(agentsTable).values(req.body).returning();
      res.status(201).json(agent);
      } catch (error) {
          // console.error(error);
          res.status(500).send(error);
      
  }
  
  }