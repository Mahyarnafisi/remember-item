import React, { useState, useEffect } from "react";

import Tasks from "./Components/Tasks/Tasks";
import NewTask from "./Components/NewTask/NewTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [getError, setGetError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://codefrombasemenet-default-rtdb.europe-west1.firebasedatabase.app/newtask.json");

      if (!response.ok) {
        throw new Error("fetching has facing a problem");
      }
      setError(true);
      const data = await response.json();
      //
      let loadedTask = [];
      for (const key in data) {
        loadedTask.push({ id: key, name: data[key].text });
      }
      setTasks(loadedTask);
      //
      console.log(loadedTask);
    } catch (error) {
      setGetError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  let content;

  if (tasks.length === 0) {
    content = <p className="no-content">No content, please add something</p>;
  }

  if (isLoading) {
    content = <h2 className="loading">Loading...</h2>;
  }

  if (getError) {
    content = <h2 className="error">Something is wrong...</h2>;
  }

  return (
    <div className="App">
      <NewTask onFetch={fetchDataHandler} />
      <Tasks fetchedData={tasks} onFetch={fetchDataHandler} />
      {content}
    </div>
  );
}

export default App;
