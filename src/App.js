import React from "react";
import TodoApp from "./layouts/TodoApp";
import store from "./redux/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <div>
            <h1>I am gonna create Todo-List for you</h1>
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        </div>
    );
}