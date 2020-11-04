import "./ControlPanel.css";
import DurationControl from "./DurationControl/DurationControl";

import { TIMER_IN } from "../utilities";

export default function ControlPanel() {
    return (
        <div id="control-panel">
            <div>
                <DurationControl timer={TIMER_IN.BREAK} />
            </div>
            <div>
                <DurationControl timer={TIMER_IN.SESSION} />
            </div>
        </div>
    );
}
