export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagrafHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  return <h1>Hello World</h1>;
}

function ParagrafHelloWorld() {
  return <p>Rendy Kamaluddin</p>;
}
