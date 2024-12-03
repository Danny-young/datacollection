import { Router } from 'express';


const router =  Router();

router.get('/', (req, res) => {
    res.send("The data list for items is available")
})





export default router;