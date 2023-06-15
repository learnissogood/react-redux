import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  console.log({ counter });
  const counter2 = useSelector((state) => state.counter2);
  console.log({ counter2 });
  const dispatch = useDispatch();

  // redux
  const increaseCounter = useCallback(
    () => dispatch({ type: "increase-counter" }),
    [dispatch]
  );

  const decreaseCounter = useCallback(
    () => dispatch({ type: "decrease-counter" }),
    [dispatch]
  );

  const addBy10Counter = useCallback(
    () => dispatch({ type: "add-by-10", payload: 10 }),
    [dispatch]
  );

  // redux-toolkit
  const increaseCounter2 = useCallback(
    () => dispatch(actions.increment()),
    [dispatch]
  );

  const decreaseCounter2 = useCallback(
    () => dispatch(actions.decrement()),
    [dispatch]
  );

  const addBy10Counter2 = useCallback(
    () => dispatch(actions.addBy(20)),
    [dispatch]
  );

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Counter App</h1>
      <div className="container">
        <div className="redux">
          <h1> Counter with Redux</h1>
          <h2>{counter}</h2>
          <button onClick={increaseCounter}>Increment</button>
          <button onClick={decreaseCounter}>Decrement</button>
          <button onClick={addBy10Counter}>Add by 10</button>
        </div>
        <div className="redux-toolkit">
          <h1> Counter with Redux-Toolkit</h1>
          <h2>{counter2}</h2>
          <button onClick={increaseCounter2}>Increment</button>
          <button onClick={decreaseCounter2}>Decrement</button>
          <button onClick={addBy10Counter2}>Add by 10</button>
        </div>
      </div>
    </div>
  );
}

export default App;
