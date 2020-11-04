import { SESSION, BREAK } from "../utilities";

import { increment, decrement } from "../helper"

const initialState = {
    sessionLength: 25,
    breakLength: 5,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION.INCREMENT: {

            let sessionLength = increment(state.sessionLength);

            return Object.assign({}, state, {
                sessionLength,
            });
        }

        case SESSION.DECREMENT: {
            let sessionLength = decrement(state.sessionLength);

            return Object.assign({}, state, {
                sessionLength,
            });
        }

        case BREAK.INCREMENT: {
            let breakLength = increment(state.breakLength);

            return Object.assign({}, state, {
                breakLength,
            });
        }

        case BREAK.DECREMENT: {
            let breakLength = decrement(state.breakLength);
            
            return Object.assign({}, state, {
                breakLength,
            });
        }

        default: return state;
    }
};
