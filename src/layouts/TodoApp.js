import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function TodoApp() {

    return (
        <>
            <AddTodo/>
            <h3>Incomplete items</h3>
            <TodoList showChecked={false}/>
            <h3>Complete items</h3>
            <TodoList  showChecked={true}/>
        </>
    );
}