"use client";
import { useState } from "react";

const Counter = () => {
  // console.log("Hello Broh");
  const [counter, setCounter] = useState(0);
  // console.log(counter);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
