import React , {forwardRef}from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import '../Message.css';

const Message = forwardRef((props, ref)=>  {
    const isUser = props.message.username === props.username;
    return (
<div ref={ref} className={`message ${isUser && 'message-user'}`}>
    <Card className={isUser ? ("message-userCard") : ("message-guestCard")} >
      <CardContent>
        <Typography variant= 'h5' component='h2' color="white" gutterBottom>

            {(!isUser && `${props.message.username || 'unknown'} :`)}{props.message.text}
        </Typography>
      </CardContent>
    </Card>        
</div>
    
    )
})


export default Message;
