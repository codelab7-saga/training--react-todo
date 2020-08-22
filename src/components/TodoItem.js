import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toogleTodo} from "../redux/actions";

export default function TodoItem(props) {

    const dispatch = useDispatch();

    const onComplete = () => {
        dispatch(toogleTodo(props.task.id));
    }

    return (
        <li><label><input type="checkbox" checked={props.task.isComplete} onChange={onComplete}/>{props.task.content}</label></li>
    );
}