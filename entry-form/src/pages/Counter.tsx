import { useState } from "react";
import "./Counter.css";

function Counter() {
  // Counter value
  const [count, setCount] = useState(0);

  // Input value
  const [stepValue, setStepValue] = useState(0);

  const resetCounter = () => {
    setCount(0);
    setStepValue(0);
  };

  const changeByAmount = (amount: number) => {
    setCount((prevCount) => prevCount + amount);
  };

  return (
    <>
      <div className="text">
        <h1>Counter</h1>
      </div>

      <div className="add">
        <h1>{count}</h1>

        <button onClick={resetCounter}>Reset</button>

        <div className="add1">
          <button onClick={() => changeByAmount(5)}>Add 5</button>
          <button onClick={() => changeByAmount(-5)}>Subtract 5</button>
        </div>

        <div className="add2">
          <input
            type="number"
            value={stepValue}
            onChange={(e) => setStepValue(Number(e.target.value))}
            id="number"
          />
          <button onClick={() => changeByAmount(stepValue)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
