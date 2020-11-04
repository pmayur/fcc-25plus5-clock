import './ControlPanel.css'
import DurationControl from './DurationControl/DurationControl'

export default function ControlPanel() {
    return (
        <div id="control-panel">
            <div>
                <DurationControl/>
            </div>
            <div>
                <DurationControl/>
            </div>
        </div>
    );
}
