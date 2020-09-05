import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../redux/actions";
import {TextField, Grid, Button} from "@material-ui/core";

export default function AddTodo() {

    const [input, setInput] = useState('');
    const [errorText, setErrorText] = useState();

    const inputHandler = (e) => {
        setInput(e.target.value);
        if (e.key === 'Enter') {
            addNewToDo();
        }
    }

    const dispatch = useDispatch();

    const addNewToDo = () => {
        if (input) {
            dispatch(addToDo(input));
            setInput('');
            setErrorText('');
        } else {
            setErrorText("Please enter some value");
        }
    }

    const errorElement = () => {
        if (input) {
            return (
                <p>It will create a item With: <strong>{input}</strong></p>
            );
        } else {
            return (
                <span style={{color: "red"}}>{errorText}</span>
            );
        }
    }


    return (
        <Grid container spacing={3}>
            <Grid item xs={10}>
                <TextField id="createToDo" onKeyDown={inputHandler} label="TodoText" onChange={inputHandler} value={input} fullWidth variant="outlined"/>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={addNewToDo} fullWidth variant="contained" size="large" color="primary">Add To Do</Button>
            </Grid>
            <Grid item xs={12}>
                {errorElement()}
            </Grid>
        </Grid>
    );
}