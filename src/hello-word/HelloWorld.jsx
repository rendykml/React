export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagrafHelloWorld />
      <FooterHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hel World";
  return <h1 style={
    {
      color: "blue",
      fontSize: "24px",
      textAlign: "center",
      marginTop: "20px"
    }
  }>{text}</h1>;
}

function ParagrafHelloWorld(props) {
  const text = "This is my first React app";
  style = {
    color: "green",
    fontSize: "18px",
    textAlign: "center",
    marginTop: "10px"
  };
  return <p style={style}>{props.text.toLocaleLowerCase()}</p>;
}

function FooterHelloWorld() {
  return <footer className="text-center text-gray-500 text-xs">
    <p>© 2023 My First React App</p>; </footer>
}
