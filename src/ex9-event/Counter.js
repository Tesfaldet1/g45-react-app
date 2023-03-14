import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementClick = () => {
    setCounter(counter + 1);
    console.log("incrementClick!");
  };
  const decrementClick = () => {
    setCounter(counter - 1);
    console.log("decrementClick!");
  };
  return (
    <div className="container">
      <h3>Counter: {counter}</h3>
      <button
        type="button"
        className="btn btn-success"
        onClick={incrementClick}
      >
        Increment
      </button>
      <button className="btn btn-danger " onClick={decrementClick}>
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
