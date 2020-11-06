import "./App.css";
import ControlPanel from "./ControlPanel/ControlPanel";
import TimerPanel from "./TimerPanel/TimerPanel"

function App() {
    return (
        <div className="App">
            <div id="timer">
                <div>
                    <TimerPanel />
                </div>
                <div>
                    <ControlPanel />
                </div>
            </div>
        </div>
    );
}

export default App;
