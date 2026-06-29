import React from "react";
import "./App.css";

function App() {
  const [displayVal, setDisplayVal] = React.useState("");

  const handleAppend = (alphanum) => {
    setDisplayVal(displayVal + alphanum);
  };
  const clear = () => {
    setDisplayVal("");
  };

  const calculator = () => {
    //eslint-disable-next-line no-eval
    const result = eval(displayVal);
    setDisplayVal(result);
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="screendisplay">{displayVal}</div>
      <div style={{ display: "flex" }}>
        <div>
          {[...Array(9)].map((_, i) => (
            <button
              className="btn"
              key={i + 1}
              onClick={() => handleAppend(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button className="btn" onClick={() => handleAppend("+")}>
            +
          </button>
          <button className="btn" onClick={() => handleAppend("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleAppend("/")}>
            /
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => handleAppend(0)}>
            0
          </button>
          <button className="btn" onClick={clear}>
            c
          </button>
          <button className="btn" onClick={calculator}>
            =
          </button>
          <button className="btn" onClick={() => handleAppend("*")}>
            x
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
