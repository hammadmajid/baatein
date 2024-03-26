import express, {Express} from 'express';
import dotenv from 'dotenv';

import authRouter from './routes/api/auth';

dotenv.config();

const app: Express = express();
const port: string | 5000 = process.env.PORT || 5000;

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
