import { createAsyncThunk } from "@reduxjs/toolkit";
import {Message, MessageMutation} from "../../types";
import axiosApi from "../axiosApi";

export const fetchMessages = createAsyncThunk<Message[]>(
    'fetchMessages',
    async () => {
        const messagesResponse = await axiosApi.get<Message[]>('/messages');
        return messagesResponse.data;
    }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
    'fetchMessages',
    async (messageMutation) => {
        return axiosApi.post('/messages', messageMutation);
    }
);
