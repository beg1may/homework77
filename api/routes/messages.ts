import express from "express";
import {MessageMutation} from "../types";
import fileDb from "../fileDb";

const messageRouter = express.Router();

messageRouter.get('/', async (req, res) => {
    const messages = await fileDb.getMessages();
    res.send(messages);
});

messageRouter.post('/', async (req, res) => {
    if(!req.body.message) {
        return res.status(400).send({"error": "Message must be present in the request"});
    }

    const msgData: MessageMutation = {
        message: req.body.message,
        author: req.body.author ? req.body.author : 'Anonymous',
        image: req.body.image || null,
    }

    const msg = await fileDb.addMessage(msgData);

    res.send(msg);
});

export default messageRouter;