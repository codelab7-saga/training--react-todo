import React, {useState} from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

export default function TodoList(props) {

    //const todos = useSelector(state => state.todos); //In case you use multiple tables
    const todos = useSelector(state => state);

    const filtered = () => {
        return todos.filter(item => (item.isComplete == props.showChecked) ? true : false);
    }

    return (
        <>
            <ul>
                {filtered().map(
                    (item, key) => <TodoItem key={key} task={item}/>
                )}
            </ul>
        </>
    );
}