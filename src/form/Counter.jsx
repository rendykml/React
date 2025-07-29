import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.log(`Rendering Counter ${counter}`);

  function handleClick()  {
    setCounter(c => c +1);
    setCounter(c => c +1);
    setCounter(c => c +1);
    console.log(`Counters: ${counter}`);
  }
  return (
    <div>
      <button onClick={handleClick}>Increment 3 kali</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
