import Todolist from "./todolist";

export default function Todo() {

  const data = [
    {
      id : 1,
      text: "Learn React",
      isCompleted: true,
 
    },
    {
      id : 2,
      text: "Build a Todo App",
      isCompleted: false,

    },
    
    {
      id : 3,
      text: "Deploy the App",
      isCompleted: true,

    },
    
    {
      id : 4,
      text: "Share with Friends",
      isDelete: true,
    },
    {
      id : 4,
      text: "Share with Friends",
    },
  ]

  return (
    <ul>
      {data.map((item) => ( 
        <Todolist key={item.id} {...item} />
      ))}
    </ul>
  );
}
