import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { rootReducer } from "./reducers";

import { Provider } from "react-redux";

import { createStore } from "redux";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
