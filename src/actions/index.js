import {SESSION, BREAK, CHANGE} from '../utilities'

export const decrementSession = () => {
    return {
        type : SESSION.DECREMENT
    }

}

export const incrementSession = () => {
    return {
        type : SESSION.INCREMENT
    }

}

export const decrementBreak = () => {
    return {
        type : BREAK.DECREMENT
    }

}

export const incrementBreak = () => {
    return {
        type : BREAK.INCREMENT
    }

}

export const changeMinutes = (minutes) => {
    return {
        type: CHANGE.MINUTES,
        minutes
    }
}

export const changeSeconds = (seconds) => {
    return {
        type: CHANGE.SECONDS,
        seconds
    }
}

export const toggleCurrentTimer = () => {
    return {
        type: CHANGE.TIMER
    }
}

export const startStopTimer = () => {
    return {
        type: "STOP"
    }
}