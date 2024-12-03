import express, { json,urlencoded } from 'express';
import agentRoutes from './routes/agents/index';
import datacollectionRoutes from './routes/collectedData/index';

const port = 3000
const app = express();

app.use(urlencoded({extended:false}))
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use('/agents', agentRoutes);
app.use('/collectedData', datacollectionRoutes);
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
 