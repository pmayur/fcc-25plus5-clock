import "./DurationControl.css";

import addIcon from "../../assets/plus-circle.svg";
import removeIcon from "../../assets/minus-circle.svg";

import { useSelector, useDispatch } from "react-redux";
import { TIMER_IN } from "../../utilities";

// import actions for incrementing/decrementing session/break
import {
    incrementBreak,
    incrementSession,
    decrementBreak,
    decrementSession,
} from "../../actions";

export default function DurationControl(props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    // stores name of component type i.e. to control Break or Session time
    let timerName = props.timer;

    // setting these variables assuming the component to be for Break time control
    let timerLength = state.breakLength;
    let incrementAction = incrementBreak;
    let decrementAction = decrementBreak;

    // changing these variables if assumption incorrect and component of Session time control
    if (props.timer === TIMER_IN.SESSION) {
        timerLength = state.sessionLength;
        incrementAction = incrementSession;
        decrementAction = decrementSession;
    }

    return (
        <div id="container">
            <div id="duration">
                {/* displays the component type name */}
                <div className="b-s-label" id={timerName + "-label"}>
                    {timerName}
                </div>

                {/* displays the component type length */}
                <div className="b-s-length" id={timerName + "-length"}>
                    {timerLength}
                </div>

                {/* controls the time length i.e. increment/decrement */}
                <div id="control">
                    <div className="b-s-length-control" id="increment">
                        <img
                            src={addIcon}
                            alt="alternatetext"
                            id={timerName + "-increment"}
                            onClick={() => dispatch(incrementAction())}
                            className="add-sub-icon"
                        />
                    </div>
                    <div className="b-s-length-control" id="decrement">
                        <img
                            src={removeIcon}
                            alt="alternatetext"
                            id={timerName + "-decrement"}
                            onClick={() => dispatch(decrementAction())}
                            className="add-sub-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
