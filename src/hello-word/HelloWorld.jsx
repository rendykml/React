export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagrafHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello World";
  return <h1>{text}</h1>;
}

function ParagrafHelloWorld() {
  const text = "This is my first React app";
  return <p>{text.toLocaleLowerCase}</p>;

}
