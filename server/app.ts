import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import router from './router';

const app: Application = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}
