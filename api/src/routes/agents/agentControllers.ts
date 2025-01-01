import { Request, Response } from "express";
import {db} from '../../db/index.js';
import { agentsTable, createAgentSchema } from '../../db/agentSchema.js';
import { eq } from "drizzle-orm";
import _ from 'lodash';


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
  const data = _.pick(req.body,Object.keys(createAgentSchema.shape));
  const [agent] =  await db.insert(agentsTable).values(req.cleanBody).returning();
      res.status(201).json(agent);
      } catch (error) {
          // console.error(error);
          res.status(500).send(error);
      
  }
  
  };

  
  export function updateAgent(req: Request, res: Response){
    res.send('updateAgent');
    try {

    } catch (e) {
     
      res.status(500).send(e);
    }
}