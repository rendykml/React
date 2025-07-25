export default function Counter() {
  let counter = 0;
  return (
    <div>
      <button onClick={
      () => {
        counter++;
        console.log(`Counter: ${counter}`);
        }
      }>Increment
    </button>
    <h1>
        Counter: {counter}
    </h1>
    </div>
  );
}
