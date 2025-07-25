import {useState} from "react";

export default function Counter() {
  let counter = 0;

  function handleClick() {
    counter++;
    console.log(`Counter: ${counter}`);
  }
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
