import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Todo from "./Todo";
import HelloWorld from "../hello-word/HelloWorld";
import Container from "../hello-word/Container";
import Table from "../table/Table";
import AllertButton from "../button/AllertButton";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
        <HelloWorld />
        <Todo />
        <Table/>
        <AllertButton text="Click Me" message="Hello, World!"/>
    </Container>
  </StrictMode>
);