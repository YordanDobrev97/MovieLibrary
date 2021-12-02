import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        messageContainer: {
            margin: '15px',
            padding: '9px',
            background: 'green',
            color: 'white'
        }
    }),
);

type MessageProps = {
    message: string,
    isActive: boolean,
}


const Message: React.FC<MessageProps> = props => {
    const classes = useStyles()

    return (
        <div style={{ display: props.isActive ? 'block' : 'none' }}>
            <div className={classes.messageContainer}>{props.message}</div>
        </div>
    )
}

export default Message;