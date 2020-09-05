import {createStore} from "redux";
import redux from "./reducers";  //In case you use multiple tables for local database


export default createStore(redux);