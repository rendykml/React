import Todolist from "./todolist";

export default function Todo() {

  const data = [
    {
      text: "Learn React",
      isCompleted: true,
 
    },
    {
      text: "Build a Todo App",
      isCompleted: false,

    },
    
    {
      text: "Deploy the App",
      isCompleted: true,

    },
    
    {
      text: "Share with Friends",
      isDelete: true,
    },
  ]

  const todolist = data.map((data) => <Todolist {...data}/>)
  return (
    <ul>
      {todolist}
    </ul>
  );
}
