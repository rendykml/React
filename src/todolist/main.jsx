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
import { FaBeer } from 'react-icons/fa';

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
      <div
        style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          marginBottom: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <HelloWorld />
      </div>
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>
          <FaBeer /> Cheers to React!
        </h2>
      </div>
    </Container>
  </StrictMode>
);