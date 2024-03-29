import express from "express";
import messageRouter from "./routes/messages";
import cors from 'cors';
import fileDb from '../api/fileDb';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/messages', messageRouter);

const run = async () => {
    await fileDb.init();
    app.listen(port, () => {
        console.log(`Port: ${port}!`);
    });
};

void run();