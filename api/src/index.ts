import express, { json,urlencoded } from 'express';
import agentRoutes from './routes/agents/';
import manageRoutes from './routes/manage';
import electoralAreasRoutes from './routes/electoralArea';
import localitiesRoutes from './routes/localities/';
import datacollectionRoutes from './routes/collectedData';
import geolocationRoutes from './routes/geoLocations';
import serverless from "serverless-http";

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
app.use('/electoralArea', electoralAreasRoutes);
app.use('/geoLocations', geolocationRoutes);
app.use('/localities', localitiesRoutes);
if (process.env.NODE_ENV === "dev") {
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
}); 
}
export const handler = serverless(app);