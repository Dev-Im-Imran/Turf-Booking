import express from 'express';
import cors from 'cors';
import mongoose, { now } from 'mongoose';
import userRouter from './routers/userRouter.js'


//middlewares
const app = express();
app.use(cors());
app.use(express.json());


//routes 
app.use("/api", userRouter);



const PORT = process.env.PORT || 5000;
const CONNECTOR_URL = 'mongodb+srv://imran_DB_User:DBImranFaa@cluster0.yjrp4id.mongodb.net/LogIn?appName=Cluster0'



mongoose.connect(CONNECTOR_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        app.listen(PORT, () => {
            console.log('server is running on port', PORT);
        })
    })
    .catch(err => console.log(err));

