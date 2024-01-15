import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import DonesContainer from "./components/DonesContainer.jsx";
import TodosContainer from "./components/TodosContainer.jsx";
// ==========================
function App() {
  const tasksArr = [
    { id: 0, text: "Wash my face!", done: false },
    { id: 1, text: "Walk the dog", done: false },
    { id: 2, text: "Pay the rent", done: false },
    { id: 3, text: "Make so moneys", done: false },
    { id: 4, text: "Make a website", done: true },
    { id: 5, text: "Call my mom", done: true },
    { id: 6, text: "Finish reading my book", done: true },
    { id: 7, text: "Make more moneys", done: true },
  ];
  // ===========================================
  const [tasks, setTasks] = useState(tasksArr);
  // ===============================
  const addItem = (value) => {
    const newItem = {
      id: tasks.length,
      text: value,
      done: false,
    };
    return setTasks(newItem, ...tasks);
  };

  const updateItem = (id) => {
    const updatedItem = tasks.map((item) => {
      if (item.di === id) {
        item.done = !item.done;
      }
    });
    setTasks(updatedItem);
  };

  // ======================

  return (
    <div>
      <Header />
      <TodosContainer />
      <DonesContainer />
    </div>
  );
}

export default App;
