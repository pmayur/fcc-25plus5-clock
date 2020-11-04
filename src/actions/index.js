import {SESSION, BREAK} from '../utilities'

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