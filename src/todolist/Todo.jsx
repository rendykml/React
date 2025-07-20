import Todolist from "./todolist";

export default function Todo() {
  return (
    <ul>
      <Todolist text="Learn React" isCompleted={true} isDelete={true} />
      <Todolist text="Build a Todo App" isCompleted={true} />
      <Todolist text="Deploy the App" isCompleted={false} />
      <Todolist text="Share with Friends" isCompleted={true} />
      <Todolist text="Get Feedback" isCompleted={false} />
      <Todolist text="Iterate on Feedback" isCompleted={true} />
      <Todolist text="Celebrate Success" isCompleted={false} />
      <Todolist text="Plan Next Steps" isCompleted={true} />
    </ul>
  );
}
