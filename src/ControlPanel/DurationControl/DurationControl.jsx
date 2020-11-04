import "./DurationControl.css";

import addIcon from '../../assets/baseline_add_circle_black_18dp.png';
import removeIcon from '../../assets/baseline_remove_circle_black_18dp.png'

export default function DurationControl() {
    return (
        <div id="duration">
            <div id="label">Break</div>
            <div id="length">12</div>
            <div id="control">
                <div id="increment">
                    <img src={addIcon} alt="alternatetext"/>
                </div>
                <div id="decrement">
                    <img src={removeIcon} alt="alternatetext"/>
                </div>
            </div>
        </div>
    );
}
