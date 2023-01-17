import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toString === "") {
      return alert("Please fill the value");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter your todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="success">Add +</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
