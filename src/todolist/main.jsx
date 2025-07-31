import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Todo from "./Todo";
import HelloWorld from "../hello-word/HelloWorld";
import Container from "../hello-word/Container";
import Table from "../table/Table";
import AllertButton from "../button/AllertButton";
import MyButton from "../button/MyButton";
import ToolBar from "../button/ToolBar";
import SearchForm from "../form/SearchForm";
import SayHelloBro from "../form/SayHelloBro";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <header
        style={{
          textAlign: "center",
          padding: "16px",
          background: "#2563eb",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <h1>Aplikasi React Modern</h1>
      </header>
      <HelloWorld />
      <Todo />
      <Table />
      <AllertButton text="Click Me" message="Hello, World!" />
      <MyButton
        text="smash aku"
        onSmash={() => alert("Button smashed!")}
      />
      <ToolBar
        onClick={(e) => {
          e.stopPropagation();
          alert("Button clicked!");
        }}
      />
      <SearchForm />
      <SayHelloBro />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);