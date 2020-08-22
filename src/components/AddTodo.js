import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../redux/actions";

export default function AddTodo() {

    const [input,setInput] = useState('');

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }

    const dispatch = useDispatch();

    const addNewToDo = () =>{
        dispatch(addToDo(input));
        setInput('');
    }

    return (
        <>
            <label htmlFor="createToDo">Add to do: </label>
            <input type="text" value={input} onChange={inputHandler} id="createToDo" />
            <p> It will create a todo list for: {input}
            <button onClick={addNewToDo}>Confirm</button>
            </p>
        </>
    );
}