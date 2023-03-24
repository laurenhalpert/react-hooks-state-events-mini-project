import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setMyTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDeleteTask(deletedTaskText) {
    setMyTasks(myTasks.filter(task => task.text !== deletedTaskText))
  }

  function handleTaskFormSubmit(newItem) {
    setMyTasks([...myTasks, newItem])
  }

  const tasksToDisplay= myTasks.filter(task => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList onDeleteTask={handleDeleteTask} tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
