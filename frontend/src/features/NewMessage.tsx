import React from 'react';
import {useAppDispatch} from "../app/hooks";
import {MessageMutation} from "../../types";
import {Typography} from "@mui/material";
import {createMessage} from "./messagesThunk";
import MessageForm from "./components/MessageForm";

const NewMessage = () => {
    const dispatch = useAppDispatch();

    const onFormSubmit = async (messageMutation: MessageMutation) => {
        await dispatch(createMessage(messageMutation));
    }
    return (
        <>
            <Typography variant="h4">New message</Typography>
            <MessageForm onSubmit={onFormSubmit} />
        </>
    );
};

export default NewMessage;