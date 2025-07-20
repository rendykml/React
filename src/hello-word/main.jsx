import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todo from "../todolist/Todo";

createRoot(document.getElementById("root")).render(

    <StrictMode>
        <Container>
            <HelloWorld/>
            <Todo />
        </Container>
    </StrictMode>
  
);
