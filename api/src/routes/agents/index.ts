import {Router} from 'express'


import {
getAgents,
createAgent,
updateAgent
} from "./agentControllers.js"

import { validateData } from "../../middlewares/validationMiddleware.js";
import { createAgentSchema } from "../../db/agentSchema.js";


const router = Router();


router.get('/', getAgents);
router.post('/', validateData(createAgentSchema), createAgent)
router.post('/', updateAgent)



export default router;