import React from "react";

import Tasks from "./Components/Tasks/Tasks";
import NewTask from "./Components/NewTask/NewTask";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NewTask />
      <Tasks />
    </div>
  );
}

export default App;
