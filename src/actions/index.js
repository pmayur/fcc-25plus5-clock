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

export const changeMinutes = (minute) => {
    return {
        type: CHANGE.MINUTES,
        minute
    }
}

export const changeSeconds = (second) => {
    return {
        type: CHANGE.SECONDS,
        second
    }
}