import {ADD_POST, ADD_TODO, DELETE_POST, GET_POSTS, TOGGLE_TODO} from "./actionTypes";


let id = 1;

export const addToDo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: id++,
        content: content,
        isComplete: false
    }
});

export const toogleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const addPost = (content) => ({
    type: ADD_POST,
    payload: content
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});

export const getPost = (data) => ({
    type: GET_POSTS,
    payload:data
});