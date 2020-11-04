import "./App.css";
import ControlPanel from "./ControlPanel/ControlPanel";

function App() {
    return (
        <div className="App">
            <div id="timer">
                <div>
                    <ControlPanel />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default App;
