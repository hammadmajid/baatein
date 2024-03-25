import * as express from 'express';
import {Express} from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

// @ts-ignore
const app: Express = express();
const port: string | 5000 = process.env.PORT || 5000;

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
