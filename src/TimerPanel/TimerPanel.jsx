import "./TimerPanel.css";

import startButton from "../assets/baseline_play_circle_filled_black_18dp.png";
import removeButton from "../assets/baseline_remove_circle_black_18dp.png";

import { useSelector } from "react-redux";

export default function TimerPanel() {
    const state = useSelector((state) => state);
    const timeLeft = state.timeLeft;

    return (
        <div id="timer-panel">
            <div id="timer-label">Session</div>
            <div id="time-left">
                {timeLeft.minutes < 10
                    ? "0" + timeLeft.minutes
                    : timeLeft.minutes}

                :
                {timeLeft.seconds < 10
                    ? "0" + timeLeft.seconds
                    : timeLeft.seconds}
            </div>
            <div id="buttons">
                <div id="start_stop">
                    <img
                        src={startButton}
                        alt="alternatetext"
                        id="start-icon"
                    />
                </div>
                <div id="reset">
                    <img
                        src={removeButton}
                        alt="alternatetext"
                        id="remove-icon"
                    />
                </div>
            </div>
        </div>
    );
}
