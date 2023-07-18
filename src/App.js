import React, { useState, useEffect } from "react";

import Tasks from "./Components/Tasks/Tasks";
import NewTask from "./Components/NewTask/NewTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [getError, setGetError] = useState(null);
  const [dependency, setDependency] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch("https://codefrombasemenet-default-rtdb.europe-west1.firebasedatabase.app/newtask.json");

      if (!response.ok) {
        throw new Error("fetching has facing a problem");
      }
      setError(true);
      const data = await response.json();

      let loadedTask = [];
      for (const key in data) {
        loadedTask.push({ id: key, name: data[key].text });
      }
      setTasks(loadedTask);

      console.log(loadedTask);
    } catch (error) {
      setGetError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataHandler();
  }, [dependency]);
  const updateState = () => {
    setDependency((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="App">
      <NewTask dependency={updateState} />
      <Tasks fetchedData={tasks} onFetch={fetchDataHandler} />
    </div>
  );
}

export default App;
