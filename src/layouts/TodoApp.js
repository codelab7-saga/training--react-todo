import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';


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

export default function TodoApp() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <h1>I am gonna create Todo-List for you</h1>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.paper}>
                        <AddTodo/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={1} className={[classes.paper, classes.paperLeft]}>
                        <h3>Incomplete items</h3>
                        <TodoList showChecked={false}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={[classes.paper, classes.paperLeft]}>
                        <h3>Complete items</h3>
                        <TodoList showChecked={true}/>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    );
}