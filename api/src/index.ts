import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routers/router.auth';
import cryptoRotuer from './routers/router.cryptography';

dotenv.config();

const app: Application = express();
const PORT = 5000;
const MONGO_URL: string =
    process.env.MONGO_URL || 'mongodb://localhost:27017/digilocker';

mongoose.connect(MONGO_URL, () => {
    console.log('Connected to MongoDB: ' + MONGO_URL);
});

app.use(express.json());
app.use(authRouter);
app.use(cryptoRotuer);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
