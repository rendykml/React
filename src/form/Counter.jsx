import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.log(`Rendering Counter`);

  function handleClick() {
    setCounter(counter + 3);
    console.log(`Counters: ${counter}`);
  }
  return (
    <div>
      <button onClick={handleClick}>Increment 3 kali</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
