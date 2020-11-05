import { CHANGE, SESSION, BREAK, TIMER_IN } from "../utilities";

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
                    seconds: 0
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
                    seconds: 0
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

        case CHANGE.MINUTES: {
            let minutes = action.minutes;
            let seconds = state.timeLeft.seconds;

            return Object.assign({}, state, {
                timeLeft: {
                    minutes,
                    seconds
                }
            })
        }
        
        case CHANGE.SECONDS: {
            let minutes = state.timeLeft.minutes;
            let seconds = action.seconds;

            return Object.assign({}, state, {
                timeLeft: {
                    minutes,
                    seconds
                }
            })
        }

        default: return state;
    }
};
