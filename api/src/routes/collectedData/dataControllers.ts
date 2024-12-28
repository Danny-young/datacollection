import { Request, Response } from "express";
import {db} from '../../db/index';
import { agentsTable, createAgentSchema } from '../../db/agentSchema';
import { eq } from "drizzle-orm";
import _ from 'lodash';



