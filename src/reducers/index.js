import { SESSION, BREAK, TIMER_IN } from "../utilities";

import { increment, decrement } from "../helper"

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    timeLeft: {
        minutes: 25,
        seconds: 0
    },
    currentTimer: TIMER_IN.SESSION
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION.INCREMENT: {

            let sessionLength = increment(state.sessionLength);
            let seconds = state.timeLeft.seconds;

            return Object.assign({}, state, {
                sessionLength,
                timeLeft: {
                    minutes: sessionLength,
                    seconds
                }
            });
        }

        case SESSION.DECREMENT: {
            let sessionLength = decrement(state.sessionLength);
            let seconds = state.timeLeft.seconds;

            return Object.assign({}, state, {
                sessionLength,
                timeLeft: {
                    minutes: sessionLength,
                    seconds
                }
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
