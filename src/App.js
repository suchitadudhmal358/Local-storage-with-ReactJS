import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = () => {
  let localTodos = JSON.parse(localStorage.getItem("todos"));
  const [todosList, setTodosList] = useState(localTodos);

  // useEffect(() => {
  //   localTodos = JSON.parse(localStorage.getItem("todos"));
  //   // console.log({ localTodos });
  //   if (localTodos) {
  //     setTodosList(localTodos);
  //   }
  // }, []);

  const addTodos = async (todo) => {
    setTodosList([...todosList, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  const removeTodo = (id) => {
    setTodosList(todosList.filter((todo) => todo.id !== id));
  };
  return (
    <Container fluid>
      <h1>Todo with localStorage</h1>
      <Todos todos={todosList} removeTodo={removeTodo} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
