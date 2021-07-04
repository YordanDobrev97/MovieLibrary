import express, { Application, Request, Response } from 'express';
import router from './router';
import cors from 'cors';

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/', router);

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}
