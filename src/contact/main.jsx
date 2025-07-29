import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Contact from "./contact";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Contact/>
    </StrictMode>
    )