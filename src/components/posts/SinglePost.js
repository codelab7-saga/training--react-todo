import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {IconButton, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {deletePost} from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    margin: {margin: theme.spacing(1),},
    inline: {display: 'inline'}
}));

export default function SinglePost({post}) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const hidePost = () => {
        dispatch(deletePost(post.id));
        fetch('https://jsonplaceholder.typicode.com/posts/'+post.id, {
            method: 'DELETE',
        }).then((response) => console.log(response)).catch((error) => console.log(error));
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={'Post ' + post.id} src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={post.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {post.userId}
                            </Typography>
                            {' --' + post.body}
                        </React.Fragment>
                    }
                />
                <IconButton aria-label="delete" className={classes.margin} onClick={hidePost}>
                    <DeleteIcon fontSize="large"/>
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
}