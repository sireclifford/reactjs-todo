import { createRoot } from "react-dom/client";
import React from 'react';
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);