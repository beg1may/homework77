import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Message, MessageMutation} from "./types";

const filename = './db.json';
let data : Message[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = []
        }
    },
    async getMessages() {
        return data;
    },
    async addMessage(item: MessageMutation) {
        const msg: Message = {
            id: crypto.randomUUID().toString(),
            ...item
        };

        data.push(msg);
        await this.save();
        return msg;
    },
    async save() {
        await fs.writeFile(filename, JSON.stringify(data, null, 2));
    },
};

export default fileDb;