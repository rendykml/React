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
  return <h1 style={
    {
      color: "blue",
      fontSize: "24px",
      textAlign: "center",
      marginTop: "20px"
    }
  }>{texts}</h1>;
}

function ParagrafHelloWorld({text ="lupa di kasih teks"}) {
  // const text = "This is my first React app";
  const style = {
    color: "green",
    fontSize: "18px",
    textAlign: "center",
    marginTop: "10px"
  };
  return <p style={style}>{text.toLocaleLowerCase()}</p>;
}

