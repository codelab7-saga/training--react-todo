import {ADD_TODO, TOGGLE_TODO} from "../actionTypes";

const intialState = [];

export default function (state = intialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        case TOGGLE_TODO: {
            let abc = [...state];
            abc.map((item) => {
                if (item.id == action.payload)
                    item.isComplete = !item.isComplete;
                return item;
            });
            return abc;
        }
        default: {
            return state;
        }
    }
}