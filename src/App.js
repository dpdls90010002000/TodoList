import "./App.css";
import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input className="border-2"
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button onClick={addItem} className="border-2">Add</button>
      <TodoBoard todoList={todoList}></TodoBoard>
    </main>
  );
}

export default App;
