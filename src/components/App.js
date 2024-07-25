import React, { useState, useMemo } from "react";
import "../styles/App.css";

const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      title: `Todo ${i}`,
      completed: i % 2 == 1,
    });
  }
  return tasks;
};

const App = () => {
  const [tasks] = useState(generateTasks());
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };


  return (
    <div className='app'>
      <button onClick={() => handleFilterChange("all")}>All</button>
      <button onClick={() => handleFilterChange("active")}>Active</button>
      <button onClick={() => handleFilterChange("completed")}>Completed</button>
      
      <div className="line"></div>
      <h3>Note: List is artificially slowed down!</h3>
      <ul>
        {filteredTasks.map(task=>
          <li className={task.completed ? 'active': ''} key={task.id}>{task.title}</li>
        )}
      </ul>
    </div>
  );
};

export default App;
