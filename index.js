import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import { router } from './routes/appRouter.js';

const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use(router);
app.set('view engine', 'ejs');


mongoose.connect(process.env.DB_URL);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
