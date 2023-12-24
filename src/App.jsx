import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
