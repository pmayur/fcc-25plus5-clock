import "./TimerPanel.css";

import startButton from "../assets/baseline_play_circle_filled_black_18dp.png";
import pauseButton from "../assets/baseline_pause_circle_filled_black_18dp.png";
import resetButton from "../assets/baseline_refresh_black_18dp.png";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TIMER_IN } from "../utilities";

import {
    changeMinutes,
    changeSeconds,
    toggleCurrentTimer,
    startStopTimer,
} from "../actions";

export default function TimerPanel() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    console.log(state);
    const [time, setTime] = useState(state.sessionLength * 60);

    const [isStarted, setIsStarted] = useState(false);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const startedActions = () => {
        setTime(time - 1);
        dispatch(changeMinutes(Math.floor(time / 60)));
        dispatch(changeSeconds(time % 60));

        if (time <= 0) {
            if( state.currentTimer === TIMER_IN.SESSION) {
                dispatch(changeMinutes(state.breakLength));
                setTime(state.breakLength * 60)
            } else {
                dispatch(changeMinutes(state.sessionLength));
                setTime(state.sessionLength * 60)
            }
            dispatch(changeSeconds(0));
            dispatch(toggleCurrentTimer());
        }
    };

    useInterval(() => {
        if (isStarted) {
            startedActions();
        }
    }, 1000);

    const startTimer = () => {
        setTime(10
            // (state.timeLeft.minutes * 60 + state.timeLeft.seconds) - 1
        )
        dispatch(startStopTimer());
        setIsStarted(true);
    };

    const pauseTimer = () => {
        setIsStarted(false);
    };

    return (
        <div id="timer-panel">
            <div id="timer-label">
                {state.currentTimer}
            </div>
            <div id="time-left">
                {state.timeLeft.minutes < 10
                    ? "0" + state.timeLeft.minutes
                    : state.timeLeft.minutes}
                :
                {state.timeLeft.seconds < 10
                    ? "0" + state.timeLeft.seconds
                    : state.timeLeft.seconds}
            </div>
            <div id="buttons">
                <div id="start_stop">
                    <img
                        src={isStarted ? pauseButton : startButton}
                        alt="alternatetext"
                        id="start-icon"
                        onClick={isStarted ? pauseTimer : startTimer}
                    />
                </div>
                <div id="reset">
                    <img
                        src={resetButton}
                        alt="alternatetext"
                        id="remove-icon"
                    />
                </div>
            </div>
        </div>
    );
}
