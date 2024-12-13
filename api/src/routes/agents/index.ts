import {Router} from 'express'


import {
getAgents,
createAgent,
updateAgent


} from "./agentControllers"

import { validateData } from "../../middlewares/validationMiddleware";
import { createAgentSchema} from "../../db/agentSchema";

const router = Router();


router.get('/', getAgents);
router.post('/',validateData(createAgentSchema),createAgent)
router.post('/',updateAgent)



export default router;