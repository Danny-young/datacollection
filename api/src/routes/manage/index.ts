import e, { Router } from 'express';
import { createAgentSchema, agentsTable, loginSchema } from '../../db/agentSchema.js';
import { validateData } from '../../middlewares/validationMiddleware.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../db/index.js';
import { eq,or } from 'drizzle-orm';

const router =  Router();

router.post('/register', validateData(createAgentSchema), async(req, res) => {
    try {    
        const data = req.cleanBody;
        const { email, phoneNumber } = data;
        const [user] = await db
            .select()
            .from(agentsTable)
            .where(
                or(eq(agentsTable.email, email), eq(agentsTable.phoneNumber, phoneNumber))
            );

        if (user) {
            if (user.phoneNumber === phoneNumber) {
                res.status(401).json({error: 'This number is already in use'});
                return;
            } 
            if (user.email === email) {
                res.status(401).json({error: 'This email is already in use'});
                return;
            }
        }

        // Generate random password
        const password = uuidv4().slice(0, 8);
        const hashedPassword = await bcrypt.hash(password, 10);

        // Agent Code generation
        // const agentCount = await db.select({ count: sql<number>`count(*)` }).from(agentsTable);
        // let newCount = Number(agentCount[0].count) + 1;
        // const username = `AG${String(newCount).padStart(3, "0")}`;

        // Insert new agent into the database with a temporary username
        const [newAgent] = await db.insert(agentsTable).values({
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: hashedPassword,
            username: 'TEMP' // Add temporary username during insert
        }).returning({ id: agentsTable.id });

        const username = `AG${String(newAgent.id).padStart(3, "0")}`;
        
        // Update the agent with the generated username
        await db.update(agentsTable)
            .set({ username })
            .where(eq(agentsTable.id, newAgent.id));
            
        // Send the temporary password to the agent
        res.status(200).json({
            message: "Agent successfully created",
            temporaryPassword: password
        });
        return;

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
        return;
    }
});



router.post('/login',validateData(loginSchema), async(req, res) => {

    try {
        const {username, password } = req.cleanBody;

        const [user] = await db.select().from(agentsTable).where(eq(agentsTable.username,username));

        if(!user) {
            res.status(401).json({error: 'Authentication failed'});
            return;
        }

        const match = await bcrypt.compare(password,user.password);
        if(!match) {
            res.status(401).json({error: 'Authentication failed'});
            return;
        }


        // create a jwt token 
        // const token = jwt.sign({Userid: user.id, role:user.role}, 
        // 'your-secret', { expiresIn: '1h' });


        // @ts-ignore
        // delete user.password;
        // res.status(200).json({token, user});

        res.status(200).json({message: "Success!"});
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
        
    }
})





export default router;