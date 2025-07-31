import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todo from "../todolist/Todo";
import Table from "../todolist/Table";

createRoot(document.getElementById("root")).render(

    <StrictMode>
        <Container>
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Aplikasi React Saya</h1>
            <div className="space-y-4">
                <HelloWorld />
                <Todo />
                <Table />
                {/* ...komponen lain... */}
            </div>
        </Container>
    </StrictMode>
  
);
