import {ADD_TODO, TOGGLE_TODO} from "./actionTypes";


let id = 1;

export const addToDo = (content) => ({
    type:ADD_TODO,
    payload:{
        id: id++,
        content:content,
        isComplete:false
    }
});

export const toogleTodo = (id) => ({
    type:TOGGLE_TODO,
    payload:id
});