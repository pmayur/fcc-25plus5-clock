import { CHANGE, SESSION, BREAK, TIMER_IN } from "../utilities";

import { increment, decrement } from "../helper";

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    timeLeft: {
        minutes: 25,
        seconds: 0,
    },
    currentTimer: TIMER_IN.SESSION,
    running: false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SESSION.INCREMENT: {
            let sessionLength = increment(state.sessionLength);
            let currentTimer = state.currentTimer;
            let timeLeft = state.timeLeft;

            if (currentTimer === TIMER_IN.SESSION) {
                timeLeft = {
                    minutes: sessionLength,
                    seconds: 0,
                };
            }

            return Object.assign({}, state, {
                sessionLength,
                timeLeft,
            });
        }

        case SESSION.DECREMENT: {
            let sessionLength = decrement(state.sessionLength);
            let currentTimer = state.currentTimer;
            let timeLeft = state.timeLeft;

            if (currentTimer === TIMER_IN.SESSION) {
                timeLeft = {
                    minutes: sessionLength,
                    seconds: 0,
                };
            }

            return Object.assign({}, state, {
                sessionLength,
                timeLeft,
            });
        }

        case BREAK.INCREMENT: {
            let breakLength = increment(state.breakLength);
            let currentTimer = state.currentTimer;
            let timeLeft = state.timeLeft;

            if (currentTimer === TIMER_IN.BREAK) {
                timeLeft = {
                    minutes: breakLength,
                    seconds: 0,
                };
            }

            return Object.assign({}, state, {
                breakLength,
                timeLeft,
            });
        }

        case BREAK.DECREMENT: {
            let breakLength = decrement(state.breakLength);
            let currentTimer = state.currentTimer;
            let timeLeft = state.timeLeft;

            if (currentTimer === TIMER_IN.BREAK) {
                timeLeft = {
                    minutes: breakLength,
                    seconds: 0,
                };
            }

            return Object.assign({}, state, {
                breakLength,
                timeLeft,
            });
        }

        case CHANGE.MINUTES: {
            let minutes = action.minutes;
            let seconds = state.timeLeft.seconds;

            return Object.assign({}, state, {
                timeLeft: {
                    minutes,
                    seconds,
                },
            });
        }

        case CHANGE.SECONDS: {
            let minutes = state.timeLeft.minutes;
            let seconds = action.seconds;

            return Object.assign({}, state, {
                timeLeft: {
                    minutes,
                    seconds,
                },
            });
        }

        case CHANGE.TIMER: {
            let currentTimer = state.currentTimer;

            if (currentTimer === TIMER_IN.SESSION) {
                currentTimer = TIMER_IN.BREAK;
            } else if (currentTimer === TIMER_IN.BREAK) {
                currentTimer = TIMER_IN.SESSION;
            }

            return Object.assign({}, state, { currentTimer });
        }

        case "STOP": {
            return Object.assign({}, state, { running: !state.running });
        }

        default:
            return state;
    }
};
