import React, { useEffect, useState } from "react";
import Addgoals from "./Components/AddData/Addgoals";
import styles from "./App.module.css";
import Showgoals from "./Components/ShowData/Showgoals";

function App() {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialArray);
  const handleData = (title, desc) => {
    setTasks([...tasks, { title: title, description: desc }]);
  };
  const deleteHandler = (id) => {
    setTasks((oldTasks) => oldTasks.filter((e, i) => i != id));
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.app}>
      <div>
        <h2>Daily goals</h2>
        <Addgoals data={handleData} />
        {tasks.map((e, i) => {
          return (
            <Showgoals
              title={e.title}
              id={i}
              key={i}
              dlt={deleteHandler}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
