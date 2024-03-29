import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMessages} from "./messagesSlice";
import {fetchMessages} from "./messagesThunk";
import MessageItem from "./components/MessageItem";

const Messages = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <Grid container direction="column" gap={3}>
            <Grid item container>
                <Grid item>
                    <Typography variant='h4'>Messages</Typography>
                </Grid>
            </Grid>

            <Grid item container>
                {messages.map(msg => (
                    <MessageItem
                        key={msg.id}
                        author={msg.author}
                        message={msg.message}
                        image={msg.image}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Messages;