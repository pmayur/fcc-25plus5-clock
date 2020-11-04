import "./App.css";
import ControlPanel from "./ControlPanel/ControlPanel";
import TimerPanel from "./TimerPanel/TimerPanel"

function App() {
    return (
        <div className="App">
            <div id="timer">
                <div>
                    <ControlPanel />
                </div>
                <div>
                    <TimerPanel />
                </div>
            </div>
        </div>
    );
}

export default App;
