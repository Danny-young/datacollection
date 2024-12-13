import express, { json,urlencoded } from 'express';
import agentRoutes from './routes/agents/index';
import manageRoutes from './routes/manage/index';
import datacollectionRoutes from './routes/collectedData/index';

const port = 3500
const app = express();

app.use(urlencoded({extended:false}))
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use('/agents', agentRoutes);
app.use('/manage', manageRoutes);
app.use('/collectedData', datacollectionRoutes);
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
 