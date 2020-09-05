import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import PostsList from "../components/posts/PostsList";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        fontFamily: "Arial"
    },
    paperLeft:{
        textAlign:'left'
    }
}));

export default function Posts() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={[classes.paper, classes.paperLeft]}>
                        <h3>Posts From API</h3>
                        <PostsList/>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    );
}