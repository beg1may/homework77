import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Grid} from "@mui/material";

interface Props {
    author: string;
    message: string;
    image: string;
}

const MessageItem: React.FC<Props> = ({author, message, image}) => {
    return (
        <Grid item xs lg={12}>
            <Card>
                <CardHeader title={`Author: ${author}`} />
                <CardContent>
                    <strong>Message: </strong><i>{message}</i>
                </CardContent>
                <CardMedia title={`image: ${image}`} />
            </Card>
        </Grid>
    );
};

export default MessageItem;