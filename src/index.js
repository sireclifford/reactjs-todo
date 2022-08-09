import { createRoot } from "react-dom/client";
import React from 'react';
import TodoContainer from "./components/TodoContainer";
import { HashRouter as Router } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);