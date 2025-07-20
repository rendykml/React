import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Todo from "./Todo";
import HelloWorld from "../hello-word/HelloWorld";
import Container from "../hello-word/Container";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
        <HelloWorld />
        <Todo />
    </Container>
  </StrictMode>
);