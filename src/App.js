import React from "react";
import TodoApp from "./layouts/TodoApp";
import store from "./redux/store";
import {Provider} from "react-redux";
import {Container, Box, Button, ButtonGroup} from "@material-ui/core";
import Posts from "./layouts/Posts";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

export default function App() {

    return (
        <Container fixed>
            <Router>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button><Link to="/">Todos</Link></Button>
                    <Button><Link to="/posts">Posts</Link></Button>
                </ButtonGroup>
                <br/>
                <Box component="span" color="text.primary" m={1}>
                    <Provider store={store}>
                        <Switch>
                            <Route exact path="/">
                                <TodoApp />
                            </Route>
                            <Route exact path="/posts">
                                <Posts />
                            </Route>
                        </Switch>
                    </Provider>
                </Box>
            </Router>
        </Container>

    );
}