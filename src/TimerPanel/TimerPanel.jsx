import "./TimerPanel.css";

import startButton from "../assets/baseline_play_circle_filled_black_18dp.png";
import removeButton from "../assets/baseline_remove_circle_black_18dp.png";

export default function TimerPanel() {
    return (
        <div id="timer-panel">
            <div id="timer-label">Session</div>
            <div id="time-left">29:20</div>
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
