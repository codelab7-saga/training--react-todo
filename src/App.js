import React from "react";
import TodoApp from "./layouts/TodoApp";
import store from "./redux/store";
import {Provider} from "react-redux";
import {Container,Box} from "@material-ui/core";

export default function App() {
    return (
        <Container fixed>
            <Provider store={store}>
                <Box component="span" color="text.primary" m={1}>
                    <TodoApp/>
                </Box>
            </Provider>
        </Container>
    );
}