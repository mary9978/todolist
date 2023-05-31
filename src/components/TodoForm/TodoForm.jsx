import React, { useState, useRef } from "react";
import "./form.css";
function TodoForm({ name, edit, setTodos, todos, submitTodoHandler }) {
  const [Input, setInput] = useState(edit ? edit.title : "");
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Input) {
      alert("please enter new task !!!");
      return;
    }
    if (name === "Add Task") {
      const newObj = {
        id: Math.floor(Math.random() * 1000),
        title: Input,
        isCompleted: false,
      };
      setTodos([...todos, newObj]);
    } else {
      submitTodoHandler(Input);
    }
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={"todo--input"}
          type={"text"}
          value={Input}
          onChange={changeHandler}
          placeholder={"Enter new Task"}
        />
        <button type={"submit"} className={"btn--style"}>
          {name}
        </button>
      </form>
    </>
  );
}

export default TodoForm;
