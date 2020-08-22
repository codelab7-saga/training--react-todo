import {createStore} from "redux";
//import redux from "./reducers";  //In case you use multiple tables for local database
import todos from "./reducers/todos";

export default createStore(todos);