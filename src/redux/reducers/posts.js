import {ADD_POST, DELETE_POST, GET_POSTS} from "../actionTypes";

const intialState = [];

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_POSTS:{
            state = action.payload;
            return state;
        }
        case ADD_POST: {

        }
        case DELETE_POST: {
            let newState = [...state];
            newState.splice(state.filter(post => post.id == action.payload),1);
            return newState;
        }
        default: {
            return state;
        }
    }
}