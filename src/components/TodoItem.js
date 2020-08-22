import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toogleTodo} from "../redux/actions";
import {Checkbox, FormControlLabel} from "@material-ui/core";

export default function TodoItem(props) {

    const dispatch = useDispatch();

    const onComplete = () => {
        dispatch(toogleTodo(props.task.id));
    }

    const labeling = () => {
        return (props.task.isComplete)?<strike>{props.task.content}</strike>:props.task.content;
    }

    return (
        <FormControlLabel
            control={<Checkbox checked={props.task.isComplete} onChange={onComplete}/>}
            label={labeling()}
        />
    );
}