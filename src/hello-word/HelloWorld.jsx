import "./Hello-World.css";

export default function HelloWorld() {
  const props = {
    text: "This is my first React apps"  
  }
  
  return (
    <div>
      <HeaderHelloWorld texts = "Hello world"  />
      <ParagrafHelloWorld {... props}/>
    </div>
  );
}

function HeaderHelloWorld({texts}) {
  // const text = "Hel World";
  return <h1 className="title">{texts}</h1>;
}

function ParagrafHelloWorld({text ="lupa di kasih teks"}) {
  // const text = "This is my first React app";
  return <p className="content">{text.toLocaleLowerCase()}</p>;
}

